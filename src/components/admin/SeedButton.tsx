"use client";
import { useState } from "react";

export default function SeedButton() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSeed() {
    if (!confirm("Seed Redis with current JSON content? This will overwrite any existing Redis data.")) {
      return;
    }
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      const data = await res.json();
      if (res.ok && data.ok) {
        setResult(`Successfully seeded ${data.seeded}/${data.total} content keys to Redis.`);
      } else {
        setError(data.error || `Seeded ${data.seeded}/${data.total}. Some keys failed.`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleSeed}
        disabled={loading}
        className="inline-flex items-center px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-md hover:bg-blue-hover transition-colors disabled:opacity-60"
      >
        {loading ? "Seeding..." : "Seed Redis from JSON"}
      </button>
      {result && (
        <p className="mt-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
          ✓ {result}
        </p>
      )}
      {error && (
        <p className="mt-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          ✗ {error}
        </p>
      )}
    </div>
  );
}
