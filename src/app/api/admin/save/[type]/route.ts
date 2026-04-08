import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { CONTENT_FILE_MAP, REDIS_ENABLED, writeContent } from "@/lib/content";

export const dynamic = "force-dynamic";

/**
 * Save handler. Writes to Upstash Redis (if env vars are set) and best-effort
 * to the local filesystem (works in dev). On Vercel production, only Redis
 * is persisted because the filesystem is read-only.
 */
export async function POST(
  request: Request,
  context: { params: Promise<{ type: string }> },
) {
  // Auth guard
  const cookieStore = await cookies();
  if (cookieStore.get("admin_auth")?.value !== "1") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { type } = await context.params;
  const relativePath = CONTENT_FILE_MAP[type];
  if (!relativePath) {
    return NextResponse.json(
      { error: `Unknown content type: ${type}` },
      { status: 400 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      { error: "Body must be a JSON object" },
      { status: 400 },
    );
  }

  // The Redis key is just the type identifier (e.g. "site", "service-oven")
  const result = await writeContent(type, relativePath, body);

  if (!result.redis && !result.file) {
    return NextResponse.json(
      {
        error:
          "Failed to persist content. Redis is not configured and the filesystem is read-only. Set KV_REST_API_URL and KV_REST_API_TOKEN env vars in Vercel.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    type,
    path: relativePath,
    persistedTo: {
      redis: result.redis,
      file: result.file,
    },
    redisEnabled: REDIS_ENABLED,
  });
}
