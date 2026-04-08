"use client";

import { useState, type ReactNode } from "react";

interface FormShellProps<T> {
  eyebrow: string;
  title: string;
  description?: string;
  initialData: T;
  contentType: string;
  children: (ctx: {
    data: T;
    set: <K extends keyof T>(key: K, value: T[K]) => void;
    update: (patch: Partial<T>) => void;
  }) => ReactNode;
}

export default function FormShell<T>({
  eyebrow,
  title,
  description,
  initialData,
  contentType,
  children,
}: FormShellProps<T>) {
  const [data, setData] = useState<T>(initialData);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
    | null
  >(null);

  function set<K extends keyof T>(key: K, value: T[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function update(patch: Partial<T>) {
    setData((prev) => ({ ...prev, ...patch }));
  }

  async function save() {
    setSaving(true);
    setToast(null);
    try {
      const res = await fetch(`/api/admin/save/${contentType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setToast({
          kind: "error",
          message: body.error ?? "Failed to save changes.",
        });
      } else {
        setToast({ kind: "success", message: "Changes saved successfully." });
      }
    } catch {
      setToast({ kind: "error", message: "Network error while saving." });
    } finally {
      setSaving(false);
      setTimeout(() => setToast(null), 4000);
    }
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-[1160px] mx-auto px-8 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-blue">
              {eyebrow}
            </p>
            <h1 className="text-lg font-extrabold text-slate-900 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-[12px] text-slate-500 mt-0.5">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={save}
            disabled={saving}
            className="inline-flex items-center px-5 py-2 bg-blue text-white text-sm font-semibold rounded-md hover:bg-blue-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
        {toast && (
          <div
            className={`max-w-[1160px] mx-auto px-8 py-2 text-[13px] font-medium ${
              toast.kind === "success"
                ? "text-emerald-700"
                : "text-red-700"
            }`}
          >
            <div
              className={`rounded-md border px-3 py-2 ${
                toast.kind === "success"
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              {toast.message}
            </div>
          </div>
        )}
      </header>
      <div className="max-w-[1160px] mx-auto px-8 py-8">
        <div className="space-y-8">{children({ data, set, update })}</div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="mb-5">
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
        {description && (
          <p className="text-[12px] text-slate-500 mt-0.5">{description}</p>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
