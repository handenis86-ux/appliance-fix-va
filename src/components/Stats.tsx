import Link from "next/link";
import type { StatItem } from "@/lib/content";

interface StatsData {
  headline: string;
  headlineLabel: string;
  items: StatItem[];
  ctaTitle: string;
  ctaLabel: string;
  ctaHref: string;
}

interface StatsProps {
  data?: StatsData;
}

const defaultData: StatsData = {
  headline: "+2,500",
  headlineLabel: "Appliances repaired in Arlington area",
  items: [
    { value: "+500", label: "Happy clients" },
    { value: "+350", label: "5-star reviews" },
    { value: "12", label: "Certified techs" },
  ],
  ctaTitle: "Schedule Your Home Service Today",
  ctaLabel: "Book Now",
  ctaHref: "#order",
};

export default function Stats({ data = defaultData }: StatsProps) {
  return (
    <section className="py-14 text-center">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="text-[clamp(2.4rem,5vw,3.2rem)] font-extrabold text-blue mb-1">{data.headline}</div>
        <p className="text-[15px] text-slate-500 mb-7">{data.headlineLabel}</p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10">
          {data.items.map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-extrabold text-slate-900">{item.value}</div>
              <p className="text-xs text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold text-slate-900 mb-5">
          {data.ctaTitle}
        </h2>
        <Link
          href={data.ctaHref}
          className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
        >
          {data.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
