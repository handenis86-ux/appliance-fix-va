import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { buildServiceSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ice Machine Repair in Arlington, VA | Same-Day Service",
  description:
    "Same-day ice machine and ice maker repair in Arlington, VA. Residential and commercial, all brands. Call (838) 201-3789 for a free estimate.",
  keywords: [
    "ice machine repair Arlington VA",
    "ice maker repair Arlington Virginia",
    "commercial ice machine repair Arlington",
    "Scotsman ice machine repair",
    "Sub-Zero ice maker repair Arlington",
    "under counter ice maker repair",
  ],
  alternates: {
    canonical: "/ice-machine-repair",
  },
  openGraph: {
    type: "website",
    url: "/ice-machine-repair",
    title: "Ice Machine Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day ice machine repair in Arlington, Virginia. Call (838) 201-3789 for a free estimate.",
    images: [
      {
        url: "/why-2.png",
        width: 1200,
        height: 630,
        alt: "Ice machine repair service in Arlington, Virginia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ice Machine Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day ice machine repair in Arlington, VA. Call (838) 201-3789.",
    images: ["/why-2.png"],
  },
};

const faqItems = [
  {
    q: "Why is my ice machine not making ice?",
    a: "The most common causes are a clogged water line, a faulty water inlet valve, low water pressure, or a defective control module. Sometimes the issue is as simple as a frozen line that needs thawing. Our technicians can quickly diagnose and fix the underlying problem.",
  },
  {
    q: "Why is my ice machine producing ice slowly?",
    a: "Slow ice production is often caused by dirty condenser coils, a clogged water filter, or low refrigerant levels. Regular cleaning and filter replacement can help, but persistent issues usually require professional service to restore normal output.",
  },
  {
    q: "Why does my ice taste or smell bad?",
    a: "Bad-tasting ice is typically caused by a dirty water filter, mineral buildup, mold growth, or absorbed odors from the freezer. Replacing the filter and a deep cleaning of the ice maker usually solves the problem.",
  },
  {
    q: "Why is my ice machine leaking water?",
    a: "Leaks are commonly caused by a clogged drain line, a damaged water supply line, a cracked ice mold, or a faulty water inlet valve. Address leaks quickly to prevent damage to your floors and surrounding cabinets.",
  },
  {
    q: "Why are my ice cubes too small or hollow?",
    a: "Small or hollow cubes usually indicate low water pressure, a clogged inlet valve, or a malfunctioning thermostat. The ice maker isn't getting enough water during the freeze cycle to form full cubes.",
  },
  {
    q: "Why won't my ice machine turn on?",
    a: "Check the power supply, circuit breaker, and on/off switch first. If those are working, the issue may be a faulty control board, thermostat, or wiring problem that needs professional diagnosis.",
  },
  {
    q: "Why does my ice machine make strange noises?",
    a: "Buzzing, grinding or rattling noises can indicate problems with the water pump, fan motor, compressor, or auger. Unusual sounds shouldn't be ignored — early diagnosis prevents costly repairs.",
  },
  {
    q: "How often should I clean my ice machine?",
    a: "We recommend a deep cleaning every 3-6 months for residential machines and monthly for commercial units. Regular maintenance prevents mineral buildup, mold, and many of the common problems above.",
  },
];

const problems = [
  "Ice machine not making ice",
  "Slow ice production",
  "Ice tastes or smells bad",
  "Ice machine leaking water",
  "Ice cubes too small or hollow",
  "Machine won't turn on",
  "Strange noises during operation",
  "Frozen water line",
  "Ice maker keeps freezing up",
  "Control board not responding",
];

const machineTypes = [
  "Built-In Ice Machines",
  "Free-Standing Ice Makers",
  "Under-Counter Ice Machines",
  "Portable Countertop Ice Makers",
  "Commercial Ice Machines",
  "Refrigerator Ice Makers",
];

const parts = [
  "Water inlet valves", "Solenoids", "Thermostats", "Control boards", "Compressors",
  "Evaporators", "Condensers", "Water filters", "Ice molds", "Heating elements",
  "Float switches", "Pumps", "Drain lines", "Fan motors", "Gaskets",
  "Sensors", "Wire harnesses", "Refrigerant lines", "Bin thermostats", "Augers",
];

const brands = [
  "Admiral", "Amana", "Bosch", "Dacor", "Crosley", "Electrolux",
  "Estate", "Fisher & Paykel", "Frigidaire", "General Electric", "GE Monogram", "GE Opal",
  "GE Profile", "Gibson", "Hotpoint", "Insignia", "Jenn-Air", "Kenmore",
  "KitchenAid", "LG", "Magic Chef", "Marvel", "Maytag", "Miele",
  "Samsung", "Scotsman", "Sub-Zero", "Thermador", "U-Line", "Viking",
  "Whirlpool", "Wolf",
];

const features = [
  {
    title: "Fast, On-Time Service",
    desc: "Scheduling your ice machine repair should be simple! That's why we offer flexible appointment times, including same and next-day service.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
  },
  {
    title: "Factory-Trained Technicians",
    desc: "Whatever the brand or model, Appliance Fix VA is your go-to authorized service center for any ice machine repair in Arlington.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
  {
    title: "Same-Day Ice Machine Repairs",
    desc: "Our technicians arrive with fully stocked trucks, which means we can fix nearly any appliance issue in just a single visit — saving you stress, time and money.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
  },
  {
    title: "Always Affordable Pricing",
    desc: "Forget about surprise charges or hidden fees. Before work begins, your repairman will explain what solutions are available so you know exactly what to expect.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
  },
  {
    title: "In Your Neighborhood",
    desc: "With technicians throughout Arlington and Northern Virginia, Appliance Fix VA is your best option for quick service.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
];

export default function IceMachineRepairPage() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            serviceType: "Ice Machine Repair",
            name: "Ice Machine Repair in Arlington, VA",
            description:
              "Same-day ice machine and ice maker repair in Arlington, Virginia. Certified technicians service residential and commercial units for all major brands.",
            path: "/ice-machine-repair",
          }),
          buildFaqSchema(faqItems),
        ]}
      />
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-navy grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[440px]">
          <div className="flex flex-col justify-center px-6 py-12 lg:py-14 lg:pl-[max(calc((100vw-1160px)/2+24px),24px)] lg:pr-12">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[.12em] text-blue mb-3">Arlington, Virginia</span>
            <h1 className="text-white text-[clamp(1.9rem,4vw,2.6rem)] font-extrabold leading-[1.15] mb-3.5">
              Ice Machine Repair in Arlington, Virginia
            </h1>
            <p className="text-white/65 text-[15px] leading-[1.7] mb-7 max-w-[440px]">
              Call by 2pm for Same-Day Service or Fast, Priority Scheduling. Whether your ice machine isn&apos;t making ice, leaks water or stopped working — our certified technicians provide quick fixes for any issue.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#order"
                className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
              >
                I Need Service
              </Link>
              <a
                href="tel:+18382013789"
                className="inline-flex items-center justify-center px-[30px] py-3.5 text-white text-[15px] font-semibold rounded-md border-[1.5px] border-white/[.45] hover:border-white hover:bg-white/[.08] transition-colors"
              >
                Call Us 24/7 (838) 201-3789
              </a>
            </div>
          </div>
          <div className="relative h-[260px] sm:h-[320px] lg:h-auto overflow-hidden">
            <Image
              src="/why-2.png"
              alt="Ice machine repair service in Arlington, Virginia"
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
                What We Fix
              </span>
              <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-3">
                Quick &amp; Affordable In-Home Ice Machine Repair Services
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[680px] mx-auto leading-[1.7]">
                Having trouble with your ice machine? Whether it&apos;s built-in, free-standing or commercial, our Arlington ice machine repair experts can fix the issue — quickly and affordably.
              </p>
            </div>
            <div className="max-w-[820px] mx-auto">
              <p className="text-sm text-slate-500 mb-5 text-center">
                Don&apos;t let a broken ice machine slow you down! From minor issues to major breakdowns, we handle every common problem, including:
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

        {/* CTA */}
        <section className="pb-16">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="bg-blue-light border border-blue-border rounded-xl p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Need your Ice Machine Fixed Today?</h3>
              <p className="text-sm text-slate-600 mb-5">
                Call us now at <a href="tel:+18382013789" className="text-blue font-semibold">(838) 201-3789</a> and we&apos;ll schedule your technician as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/#order"
                  className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
                >
                  Order Service Now
                </Link>
                <a
                  href="tel:+18382013789"
                  className="inline-flex items-center justify-center px-[30px] py-3.5 bg-white text-slate-900 text-[15px] font-semibold rounded-md border border-slate-200 hover:border-blue hover:text-blue transition-colors"
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
                Why Choose Us
              </span>
              <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-3">
                Ice Machine Repair Done Right: Quality Service By Certified Experts
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[680px] mx-auto leading-[1.7]">
                A broken ice machine can disrupt your daily routine — especially in busy households or businesses. At Appliance Fix VA, we provide speedy and reliable repairs at a fair price.
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
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 mb-1.5">{f.title}</h4>
                    <p className="text-[13px] text-slate-500 leading-[1.6]">{f.desc}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TYPES & PARTS */}
        <section className="py-16">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ice Machine Types We Service</h3>
                <p className="text-sm text-slate-500 mb-5">
                  Whether you have a built-in, free-standing, under-counter or commercial ice maker, our technicians have the expertise to diagnose and fix any model.
                </p>
                <ul className="space-y-2">
                  {machineTypes.map((t) => (
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
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Parts We Replace</h3>
                <p className="text-sm text-slate-500 mb-5">
                  In addition to repair work, our technicians can replace any faulty part or component for most ice machine models and brands.
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
            </div>
            <div className="text-center mt-10">
              <p className="text-sm text-slate-500 mb-4">
                Want to speak with an ice machine expert? Fast service is just a phone call away.
              </p>
              <a
                href="tel:+18382013789"
                className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
              >
                Call (838) 201-3789
              </a>
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="py-14 bg-gray-bg">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-slate-900 mb-1">
                Your Local Ice Machine Service Center
              </h2>
              <p className="text-lg text-slate-500 font-normal mb-3">For All Major Brands &amp; Models</p>
              <p className="text-sm text-slate-500 max-w-[680px] mx-auto">
                It doesn&apos;t matter where or when you bought your ice machine. Our authorized repair experts service nearly all major appliance models and manufacturers.
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
                Ready to speak with a certified ice machine repair expert? Contact us anytime at{" "}
                <a href="tel:+18382013789" className="text-blue font-semibold">(838) 201-3789</a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          title="Ice Machine Repair – Frequently Asked Questions"
          items={faqItems}
        />

        {/* NEED FAST REPAIR CTA */}
        <section className="py-16 bg-navy text-center">
          <div className="max-w-[640px] mx-auto px-6">
            <h2 className="text-white text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold mb-3">
              Need Fast Ice Machine Repair?
            </h2>
            <p className="text-white/65 text-[15px] mb-6 leading-[1.7]">
              We diagnose and fix all major ice machine issues — quickly and reliably.
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
                className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
              >
                Request Free Estimate
              </Link>
              <a
                href="tel:+18382013789"
                className="inline-flex items-center justify-center px-[30px] py-3.5 text-white text-[15px] font-semibold rounded-md border-[1.5px] border-white/[.45] hover:border-white hover:bg-white/[.08] transition-colors"
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
                <span className="font-normal">The Trusted Name For Ice Machine Repair in Arlington</span>
              </h2>
              <p className="text-sm text-slate-500 mt-4 mb-8 leading-[1.75] text-center">
                Looking for help getting the most out of your home appliances? From the kitchen to the laundry room, Appliance Fix VA is your one-stop shop for all of your appliance repair needs. Here&apos;s how it works:
              </p>
              <div className="bg-gray-bg rounded-[10px] p-6 sm:p-7 mb-4">
                <p className="text-sm text-slate-900 leading-[1.75]">
                  <strong className="text-blue">1.</strong> &nbsp;<strong>Schedule Your Ice Machine Repair:</strong>
                </p>
                <p className="text-sm text-slate-500 mt-2 ml-5 leading-[1.75]">
                  Call our 24/7 phone line, let us know about your ice machine problem and we&apos;ll find a technician to help you as soon as possible.
                </p>
              </div>
              <div className="bg-gray-bg rounded-[10px] p-6 sm:p-7 mb-7">
                <p className="text-sm text-slate-900 leading-[1.75]">
                  <strong className="text-blue">2.</strong> &nbsp;<strong>Your Ice Machine Gets Fixed:</strong>
                </p>
                <p className="text-sm text-slate-500 mt-2 ml-5 leading-[1.75]">
                  Once your technician arrives, they will diagnose the problem and explain what work needs to be done. If you decide to proceed, your technician will have your ice machine fixed before you know it.
                </p>
              </div>
              <p className="text-[15px] text-slate-700 leading-[1.75] text-center">
                Discover the Appliance Fix VA difference today! All you have to do is pick up the phone and call{" "}
                <a href="tel:+18382013789" className="text-blue font-bold">(838) 201-3789</a>. Let us do the rest.
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
