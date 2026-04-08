import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { CONTENT_FILE_MAP, CONTENT_DIR } from "@/lib/content";

export const dynamic = "force-dynamic";

/**
 * Persistence limitation:
 *
 *   This handler writes to the local filesystem (the `content/` folder at
 *   the project root). That works well for local development, but on a
 *   typical Vercel / serverless production deploy the filesystem is
 *   read-only and any changes would be lost on the next cold start.
 *
 *   For production, this route should be replaced with one of:
 *     1. A database (Vercel KV, Postgres, Supabase, etc.)
 *     2. A GitHub commit via Octokit to update the JSON files in the repo
 *        and trigger a Vercel redeploy
 *     3. A headless CMS (Sanity, Contentful, Payload, etc.)
 *
 *   Until then, the admin panel is usable locally and on any deploy that
 *   exposes a writable working directory.
 */

export async function POST(
  request: Request,
  context: { params: Promise<{ type: string }> },
) {
  // Auth guard — the cookie must be present
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

  const absolutePath = path.join(CONTENT_DIR, relativePath);

  try {
    await mkdir(path.dirname(absolutePath), { recursive: true });
    await writeFile(absolutePath, JSON.stringify(body, null, 2) + "\n", "utf-8");
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown error writing file";
    return NextResponse.json(
      {
        error:
          "Failed to write content file. On production deploys the filesystem is read-only — see the comment in this route for persistence options.",
        detail: message,
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, type, path: relativePath });
}
