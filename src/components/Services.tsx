import Link from "next/link";
import type { ReactNode } from "react";
import type { HomeServiceItem } from "@/lib/content";

interface ServicesData {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: HomeServiceItem[];
}

interface ServicesProps {
  data?: ServicesData;
}

const iconMap: Record<string, ReactNode> = {
  refrigerator: (
    <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="4" y1="10" x2="20" y2="10" /><line x1="10" y1="6" x2="10" y2="6.01" /><line x1="10" y1="14" x2="10" y2="14.01" /></svg>
  ),
  washer: (
    <svg viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="20" rx="2" /><circle cx="12" cy="13" r="5" /><circle cx="7" cy="5" r=".8" fill="#2563eb" stroke="none" /><circle cx="9.5" cy="5" r=".8" fill="#2563eb" stroke="none" /></svg>
  ),
  dryer: (
    <svg viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /><circle cx="8" cy="6" r="2" fill="#fff" /><circle cx="16" cy="12" r="2" fill="#fff" /><circle cx="10" cy="18" r="2" fill="#fff" /></svg>
  ),
  oven: (
    <svg viewBox="0 0 24 24"><path d="M12 2c-4 4-6 8-6 12a6 6 0 0 0 12 0c0-4-2-8-6-12z" /><path d="M12 22a3 3 0 0 1-3-3c0-2 1-4 3-6 2 2 3 4 3 6a3 3 0 0 1-3 3z" fill="#fff" /></svg>
  ),
  dishwasher: (
    <svg viewBox="0 0 24 24"><path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z" /><path d="M5 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" /><path d="M19 14l.75 1.5L21.5 16.25 19.75 17 19 18.5 18.25 17 16.5 16.25l1.75-.75L19 14z" /></svg>
  ),
  "ice-machine": (
    <svg viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="20" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><rect x="7" y="13" width="4" height="3" rx="0.5" /><rect x="13" y="13" width="4" height="3" rx="0.5" /></svg>
  ),
};

const defaultData: ServicesData = {
  eyebrow: "What We Do",
  title: "Expert Appliance Repair Services",
  subtitle: "We fix all major household appliances in Arlington, VA and all surrounding areas.",
  items: [
    {
      id: "refrigerator",
      title: "Refrigerator Repair",
      description: "Fast fixes for cooling issues, leaks and noisy compressors. Same day service available.",
      href: "/refrigerator-repair",
    },
    {
      id: "washer",
      title: "Washer Repair",
      description: "Expert diagnostics for leaks, draining problems and spin cycle failures on all major brands.",
      href: "/washer-repair",
    },
    {
      id: "dryer",
      title: "Dryer Repair",
      description: "No heat or tumbling issues? We restore your dryer's performance quickly and safely.",
      href: "/dryer-repair",
    },
    {
      id: "oven",
      title: "Oven & Stove Repair",
      description: "Reliable repair for gas and electric ovens. We fix heating elements and control boards.",
      href: "/oven-repair",
    },
    {
      id: "dishwasher",
      title: "Dishwasher Repair",
      description: "Stop hand washing. We resolve drainage issues, water leaks and power failures.",
      href: "/dishwasher-repair",
    },
    {
      id: "ice-machine",
      title: "Ice Machine Repair",
      description: "Fast and reliable repair for built-in and free-standing ice machines. We fix leaks, cooling issues and more.",
      href: "/ice-machine-repair",
    },
  ],
};

export default function Services({ data = defaultData }: ServicesProps) {
  return (
    <section className="pt-16 pb-10 lg:pt-[72px] lg:pb-12">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-10 lg:mb-11">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[.12em] text-blue mb-2.5">
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-2.5">
            {data.title}
          </h2>
          <p className="text-[15px] text-slate-500 max-w-[520px] mx-auto">
            {data.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[18px]">
          {data.items.map((s) => (
            <div
              key={s.id}
              className="bg-white border border-slate-200 rounded-[10px] p-7 text-left hover:border-blue hover:shadow-[0_4px_16px_rgba(37,99,235,.08)] transition-all"
            >
              <div className="w-10 h-10 mb-4 flex items-center justify-center [&>svg]:w-7 [&>svg]:h-7 [&>svg]:stroke-blue [&>svg]:fill-none [&>svg]:stroke-[1.5] [&>svg]:stroke-linecap-round [&>svg]:stroke-linejoin-round">
                {iconMap[s.id]}
              </div>
              <h3 className="text-[15px] font-bold text-slate-900 mb-1.5">{s.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{s.description}</p>
              <Link href={s.href || "#"} className="inline-block mt-3.5 text-[13px] font-semibold text-blue hover:underline">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
