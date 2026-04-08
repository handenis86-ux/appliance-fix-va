import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { Redis } from "@upstash/redis";
import { CONTENT_FILE_MAP, CONTENT_DIR, REDIS_ENABLED } from "@/lib/content";

export const dynamic = "force-dynamic";

/**
 * One-time seed: reads each content/*.json file from disk and writes it
 * to Redis under `content:<type>` key. Use this to bootstrap Redis with
 * the current site content after creating the Upstash database.
 *
 * Call: POST /api/admin/seed (must be authenticated)
 */
export async function POST() {
  const cookieStore = await cookies();
  if (cookieStore.get("admin_auth")?.value !== "1") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!REDIS_ENABLED) {
    return NextResponse.json(
      {
        error:
          "Redis is not configured. Set KV_REST_API_URL and KV_REST_API_TOKEN environment variables and redeploy first.",
      },
      { status: 500 },
    );
  }

  const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL!;
  const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN!;
  const redis = new Redis({ url: redisUrl, token: redisToken });

  const results: Record<string, { ok: boolean; error?: string }> = {};

  for (const [type, relativePath] of Object.entries(CONTENT_FILE_MAP)) {
    try {
      const filePath = path.join(CONTENT_DIR, relativePath);
      const raw = await readFile(filePath, "utf-8");
      const data = JSON.parse(raw);
      await redis.set(`content:${type}`, data);
      results[type] = { ok: true };
    } catch (err) {
      results[type] = {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  }

  const okCount = Object.values(results).filter((r) => r.ok).length;
  const totalCount = Object.keys(results).length;

  return NextResponse.json({
    ok: okCount === totalCount,
    seeded: okCount,
    total: totalCount,
    results,
  });
}
