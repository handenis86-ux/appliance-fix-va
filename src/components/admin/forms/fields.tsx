"use client";

import type { ReactNode } from "react";

interface FieldShellProps {
  label: string;
  help?: string;
  children: ReactNode;
}

export function FieldShell({ label, help, children }: FieldShellProps) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
        {label}
      </span>
      {children}
      {help && (
        <span className="block text-[11px] text-slate-400 mt-1">{help}</span>
      )}
    </label>
  );
}

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  help?: string;
  type?: "text" | "email" | "tel" | "url" | "number";
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  help,
  type = "text",
}: TextFieldProps) {
  return (
    <FieldShell label={label} help={help}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-light"
      />
    </FieldShell>
  );
}

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  help?: string;
  rows?: number;
}

export function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  help,
  rows = 4,
}: TextareaFieldProps) {
  return (
    <FieldShell label={label} help={help}>
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm leading-relaxed focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-light"
      />
    </FieldShell>
  );
}

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (next: number) => void;
  help?: string;
}

export function NumberField({ label, value, onChange, help }: NumberFieldProps) {
  return (
    <FieldShell label={label} help={help}>
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-light"
      />
    </FieldShell>
  );
}

interface StringArrayFieldProps {
  label: string;
  value: string[];
  onChange: (next: string[]) => void;
  help?: string;
  placeholder?: string;
}

export function StringArrayField({
  label,
  value,
  onChange,
  help,
  placeholder,
}: StringArrayFieldProps) {
  function update(i: number, v: string) {
    const next = value.slice();
    next[i] = v;
    onChange(next);
  }
  function remove(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }
  function add() {
    onChange([...value, ""]);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">
          {label}
        </span>
        <button
          type="button"
          onClick={add}
          className="text-[12px] font-semibold text-blue hover:underline"
        >
          + Add item
        </button>
      </div>
      <ul className="space-y-2">
        {value.map((item, i) => (
          <li key={i} className="flex gap-2">
            <input
              type="text"
              value={item}
              placeholder={placeholder}
              onChange={(e) => update(i, e.target.value)}
              className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-light"
            />
            <button
              type="button"
              onClick={() => remove(i)}
              className="text-[12px] font-semibold text-slate-400 hover:text-red-600 px-2"
              aria-label="Remove item"
            >
              Remove
            </button>
          </li>
        ))}
        {value.length === 0 && (
          <li className="text-[12px] text-slate-400 italic">No items yet.</li>
        )}
      </ul>
      {help && (
        <span className="block text-[11px] text-slate-400 mt-1">{help}</span>
      )}
    </div>
  );
}

interface ObjectArrayFieldProps<T> {
  label: string;
  value: T[];
  emptyItem: () => T;
  onChange: (next: T[]) => void;
  renderItem: (
    item: T,
    update: (patch: Partial<T>) => void,
    index: number,
  ) => ReactNode;
}

export function ObjectArrayField<T>({
  label,
  value,
  emptyItem,
  onChange,
  renderItem,
}: ObjectArrayFieldProps<T>) {
  function update(i: number, patch: Partial<T>) {
    const next = value.slice();
    next[i] = { ...next[i], ...patch };
    onChange(next);
  }
  function remove(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }
  function add() {
    onChange([...value, emptyItem()]);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">
          {label}
        </span>
        <button
          type="button"
          onClick={add}
          className="text-[12px] font-semibold text-blue hover:underline"
        >
          + Add item
        </button>
      </div>
      <div className="space-y-3">
        {value.map((item, i) => (
          <div
            key={i}
            className="bg-slate-50 border border-slate-200 rounded-lg p-4 relative"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                Item {i + 1}
              </span>
              <button
                type="button"
                onClick={() => remove(i)}
                className="text-[12px] font-semibold text-slate-400 hover:text-red-600"
              >
                Remove
              </button>
            </div>
            <div className="space-y-3">
              {renderItem(item, (patch) => update(i, patch), i)}
            </div>
          </div>
        ))}
        {value.length === 0 && (
          <div className="text-[12px] text-slate-400 italic">No items yet.</div>
        )}
      </div>
    </div>
  );
}
