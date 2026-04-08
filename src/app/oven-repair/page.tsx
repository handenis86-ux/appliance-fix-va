import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { buildServiceSchema, buildFaqSchema } from "@/lib/seo";
import { getService } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Oven & Stove Repair in Arlington, VA | Same-Day Service",
  description:
    "Same-day oven and stove repair in Arlington, VA. Gas, electric, convection, wall ovens. All brands. Call (838) 201-3789 for a free estimate.",
  keywords: [
    "oven repair Arlington VA",
    "stove repair Arlington Virginia",
    "gas oven repair Arlington",
    "electric oven repair Arlington",
    "wall oven repair Arlington",
    "cooktop repair Arlington",
    "range repair Arlington",
  ],
  alternates: {
    canonical: "/oven-repair",
  },
  openGraph: {
    type: "website",
    url: "/oven-repair",
    title: "Oven & Stove Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day oven and stove repair in Arlington, Virginia. Call (838) 201-3789 for a free estimate.",
    images: [
      {
        url: "/oven-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Oven and stove repair service in Arlington, Virginia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oven & Stove Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day oven and stove repair in Arlington, VA. Call (838) 201-3789.",
    images: ["/oven-hero.jpeg"],
  },
};

const featureIcons = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
];

export default async function OvenRepairPage() {
  const data = await getService("oven");
  const problems = data.problems;
  const features = data.features.items;
  const ovenTypes = data.types;
  const parts = data.parts;
  const brands = data.brands;

  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            serviceType: "Oven and Stove Repair",
            name: "Oven & Stove Repair in Arlington, VA",
            description:
              "Same-day oven, stove, range and cooktop repair in Arlington, Virginia. Certified technicians service gas, electric and convection ovens from all major brands.",
            path: "/oven-repair",
          }),
          buildFaqSchema(data.faq.items),
        ]}
      />
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-navy grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[440px]">
          <div className="flex flex-col justify-center px-6 py-12 lg:py-14 lg:pl-[max(calc((100vw-1160px)/2+24px),24px)] lg:pr-12">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[.12em] text-blue mb-3">{data.hero.eyebrow}</span>
            <h1 className="text-white text-[clamp(1.9rem,4vw,2.6rem)] font-extrabold leading-[1.15] mb-3.5">
              {data.hero.title}
            </h1>
            <p className="text-white/65 text-[15px] leading-[1.7] mb-7 max-w-[440px]">
              {data.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={data.hero.primaryCtaHref}
                className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
              >
                {data.hero.primaryCtaLabel}
              </Link>
              <a
                href={data.hero.secondaryCtaHref}
                className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 text-white text-[15px] font-semibold rounded-md border-[1.5px] border-white/[.45] hover:border-white hover:bg-white/[.08] transition-colors"
              >
                {data.hero.secondaryCtaLabel}
              </a>
            </div>
          </div>
          <div className="relative h-[260px] sm:h-[320px] lg:h-auto overflow-hidden">
            <Image
              src={data.hero.image}
              alt="Viking oven and range repair in Arlington, Virginia"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* QUICK & AFFORDABLE */}
        <section className="pt-16 pb-10">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[.12em] text-blue mb-2.5">
                {data.whatWeFix.eyebrow}
              </span>
              <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-3">
                {data.whatWeFix.title}
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[680px] mx-auto leading-[1.7]">
                {data.whatWeFix.subtitle}
              </p>
            </div>
            <div className="max-w-[820px] mx-auto">
              <p className="text-sm text-slate-500 mb-5 text-center">
                {data.whatWeFix.intro}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {problems.map((p, i) => (
                  <li
                    key={p}
                    className={`flex items-center gap-3 py-3 text-sm text-slate-700 ${
                      i < problems.length - 2 ? "border-b border-slate-200" : "sm:border-b-0"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA - Need Oven Fixed */}
        <section className="pb-16">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="bg-blue-light border border-blue-border rounded-xl p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Need your Oven Fixed Today?</h3>
              <p className="text-sm text-slate-600 mb-5">
                Call us now at <a href="tel:+18382013789" className="text-blue font-semibold">(838) 201-3789</a> and we&apos;ll schedule your technician as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/#order"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
                >
                  Order Service Now
                </Link>
                <a
                  href="tel:+18382013789"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 bg-white text-slate-900 text-[15px] font-semibold rounded-md border border-slate-200 hover:border-blue hover:text-blue transition-colors"
                >
                  Call (838) 201-3789
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY SERVICE */}
        <section className="py-14 bg-gray-bg">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[.12em] text-blue mb-2.5">
                {data.features.eyebrow}
              </span>
              <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-3">
                {data.features.title}
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[680px] mx-auto leading-[1.7]">
                {data.features.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {features.map((f, i) => {
                const total = features.length;
                const lastRow = total % 3;
                const isInLastRow = lastRow !== 0 && i >= total - lastRow;
                let lgClass = "lg:col-span-2";
                if (isInLastRow && lastRow === 2) {
                  if (i === total - 2) lgClass = "lg:col-span-2 lg:col-start-2";
                  else if (i === total - 1) lgClass = "lg:col-span-2";
                } else if (isInLastRow && lastRow === 1) {
                  lgClass = "lg:col-span-2 lg:col-start-3";
                }
                return (
                <div
                  key={f.title}
                  className={`bg-white rounded-xl border border-slate-200 p-6 flex gap-4 items-start ${lgClass}`}
                >
                  <div className="min-w-[44px] h-11 bg-blue rounded-lg flex items-center justify-center">
                    {featureIcons[i]}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 mb-1.5">{f.title}</h4>
                    <p className="text-[13px] text-slate-500 leading-[1.6]">{f.description}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TYPES & PARTS */}
        {(ovenTypes.length > 0 || parts.length > 0) && (
          <section className="py-16">
            <div className="max-w-[1160px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {ovenTypes.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Oven Types We Service</h3>
                    <p className="text-sm text-slate-500 mb-5">
                      Whether you have a gas, electric, convection or conduction oven, our technicians have the expertise needed to diagnose and fix any model.
                    </p>
                    <ul className="space-y-2">
                      {ovenTypes.map((t) => (
                        <li
                          key={t}
                          className="px-4 py-3 bg-gray-bg rounded-md text-sm font-medium text-slate-900 flex items-center gap-3"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {parts.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Parts We Replace</h3>
                    <p className="text-sm text-slate-500 mb-5">
                      In addition to repair work, our technicians can replace any faulty part or component for most oven models and brands.
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4">
                      {parts.map((p, i) => (
                        <li
                          key={p}
                          className={`flex items-center gap-2 py-2 text-[13px] text-slate-600 ${
                            i < parts.length - 2 ? "border-b border-slate-100" : ""
                          }`}
                        >
                          <span className="w-1 h-1 rounded-full bg-blue flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="text-center mt-10">
                <p className="text-sm text-slate-500 mb-4">
                  Want to speak with an oven expert? Fast service is just a phone call away.
                </p>
                <a
                  href="tel:+18382013789"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
                >
                  Call (838) 201-3789
                </a>
              </div>
            </div>
          </section>
        )}

        {/* BRANDS */}
        <section className="py-14 bg-gray-bg">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-slate-900 mb-1">
                {data.brandsSection.title}
              </h2>
              <p className="text-lg text-slate-500 font-normal mb-3">{data.brandsSection.subtitle}</p>
              <p className="text-sm text-slate-500 max-w-[680px] mx-auto">
                {data.brandsSection.description}
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 max-w-[900px] mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-1">
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center gap-2 py-2 text-[13px] text-slate-600 border-b border-slate-100"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue flex-shrink-0" />
                    <span className="truncate">{brand}</span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-slate-500 mt-5 pt-4 border-t border-slate-100 text-center">
                Ready to speak with a certified oven repair expert? Contact us anytime at{" "}
                <a href="tel:+18382013789" className="text-blue font-semibold">(838) 201-3789</a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          title={data.faq.title}
          items={data.faq.items}
        />

        {/* NEED FAST REPAIR CTA */}
        <section className="py-16 bg-navy text-center">
          <div className="max-w-[640px] mx-auto px-6">
            <h2 className="text-white text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold mb-3">
              Need Fast Oven or Stove Repair?
            </h2>
            <p className="text-white/65 text-[15px] mb-6 leading-[1.7]">
              We diagnose and fix all major oven and stove issues — quickly and reliably.
            </p>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-6 gap-y-2 mb-7 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Same-day or next-day service
              </li>
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                All major brands
              </li>
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Upfront pricing — no surprises
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#order"
                className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
              >
                Request Free Estimate
              </Link>
              <a
                href="tel:+18382013789"
                className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 text-white text-[15px] font-semibold rounded-md border-[1.5px] border-white/[.45] hover:border-white hover:bg-white/[.08] transition-colors"
              >
                Call (838) 201-3789
              </a>
            </div>
          </div>
        </section>

        {/* TRUSTED NAME */}
        <section className="py-14">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[780px] mx-auto">
              <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] text-slate-900 mb-1 text-center">
                <span className="font-extrabold">Appliance Fix VA:</span>{" "}
                <span className="font-normal">{data.trustedName.title}</span>
              </h2>
              <p className="text-sm text-slate-500 mt-4 mb-8 leading-[1.75] text-center">
                {data.trustedName.intro}
              </p>
              <div className="bg-gray-bg rounded-[10px] p-6 sm:p-7 mb-4">
                <p className="text-sm text-slate-900 leading-[1.75]">
                  <strong className="text-blue">1.</strong> &nbsp;<strong>{data.trustedName.steps[0].title}</strong>
                </p>
                <p className="text-sm text-slate-500 mt-2 ml-5 leading-[1.75]">
                  {data.trustedName.steps[0].description}
                </p>
              </div>
              <div className="bg-gray-bg rounded-[10px] p-6 sm:p-7 mb-7">
                <p className="text-sm text-slate-900 leading-[1.75]">
                  <strong className="text-blue">2.</strong> &nbsp;<strong>{data.trustedName.steps[1].title}</strong>
                </p>
                <p className="text-sm text-slate-500 mt-2 ml-5 leading-[1.75]">
                  {data.trustedName.steps[1].description}
                </p>
              </div>
              <p className="text-[15px] text-slate-700 leading-[1.75] text-center">
                {data.trustedName.outro}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
