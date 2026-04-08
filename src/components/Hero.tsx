import Image from "next/image";
import Link from "next/link";
import type { HomeHero } from "@/lib/content";

interface HeroProps {
  data?: HomeHero;
}

const defaultData: HomeHero = {
  title: "Fast & Reliable Appliance Repair in Arlington, VA",
  subtitle:
    "Same-day service. Certified technicians. All major brands. Call by 6pm for Same-Day Service or Fast, Priority Scheduling.",
  image: "/hero.jpg",
  primaryCtaLabel: "Book Now",
  primaryCtaHref: "#order",
  secondaryCtaLabel: "Call (838) 201-3789",
  secondaryCtaHref: "tel:+18382013789",
};

// Render a title that may contain a single <em>...</em> accent tag.
function renderTitle(title: string) {
  const openIdx = title.indexOf("<em>");
  const closeIdx = title.indexOf("</em>");
  if (openIdx === -1 || closeIdx === -1 || closeIdx < openIdx) return title;
  const before = title.slice(0, openIdx);
  const accent = title.slice(openIdx + 4, closeIdx);
  const after = title.slice(closeIdx + 5);
  return (
    <>
      {before}
      <em className="not-italic text-blue">{accent}</em>
      {after}
    </>
  );
}

export default function Hero({ data = defaultData }: HeroProps) {
  const isTel = data.secondaryCtaHref.startsWith("tel:");
  return (
    <section className="bg-navy grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[440px]">
      <div className="flex flex-col justify-center px-6 py-12 lg:py-14 lg:pl-[max(calc((100vw-1160px)/2+24px),24px)] lg:pr-12">
        <h1 className="text-white text-[clamp(1.9rem,4vw,2.6rem)] font-extrabold leading-[1.15] mb-3.5">
          {renderTitle(data.title)}
        </h1>
        <p className="text-white/65 text-[15px] leading-[1.7] mb-7 max-w-[420px] whitespace-pre-line">
          {data.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={data.primaryCtaHref}
            className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
          >
            {data.primaryCtaLabel}
          </Link>
          {isTel ? (
            <a
              href={data.secondaryCtaHref}
              className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 text-white text-[15px] font-semibold rounded-md border-[1.5px] border-white/[.45] hover:border-white hover:bg-white/[.08] transition-colors"
            >
              {data.secondaryCtaLabel}
            </a>
          ) : (
            <Link
              href={data.secondaryCtaHref}
              className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 text-white text-[15px] font-semibold rounded-md border-[1.5px] border-white/[.45] hover:border-white hover:bg-white/[.08] transition-colors"
            >
              {data.secondaryCtaLabel}
            </Link>
          )}
        </div>
      </div>
      <div className="relative h-[260px] sm:h-[320px] lg:h-auto overflow-hidden">
        <Image
          src={data.image}
          alt="Appliance repair technician fixing refrigerator in kitchen"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
