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
  title: "Washer Repair in Arlington, VA | Same-Day Service",
  description:
    "Same-day washing machine repair in Arlington, VA. Front-load, top-load, all brands. Call (838) 201-3789 for a free estimate today.",
  keywords: [
    "washer repair Arlington VA",
    "washing machine repair Arlington Virginia",
    "front load washer repair Arlington",
    "top load washer repair Arlington",
    "washer not spinning Arlington",
    "washer leaking water repair",
  ],
  alternates: {
    canonical: "/washer-repair",
  },
  openGraph: {
    type: "website",
    url: "/washer-repair",
    title: "Washer Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day washing machine repair in Arlington, Virginia. Call (838) 201-3789 for a free estimate.",
    images: [
      {
        url: "/why-3.png",
        width: 1200,
        height: 630,
        alt: "Washing machine repair in Arlington, Virginia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Washer Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day washing machine repair in Arlington, VA. Call (838) 201-3789.",
    images: ["/why-3.png"],
  },
};

const faqItems = [
  {
    q: "Washer Won't Start",
    a: "A washing machine that won't start is often caused by power supply issues such as a tripped circuit breaker, unplugged cord, or faulty outlet, as well as a defective lid switch, door lock, control board, or timer. Make sure the washer is plugged in, the breaker is on, and the door or lid is fully closed.",
  },
  {
    q: "Washer Not Filling with Water",
    a: "If your washer is not filling with water, the issue is commonly related to a turned-off water supply, clogged inlet valve or filter, or kinked or blocked water hoses. Check that both hot and cold water valves are open and inspect hoses for damage.",
  },
  {
    q: "Washer Not Spinning",
    a: "When a washing machine is not spinning and clothes come out soaking wet, the problem is typically a broken drive belt, faulty motor or motor coupling, or a malfunctioning lid switch.",
  },
  {
    q: "Washer Not Draining",
    a: "A washer that does not drain water usually has a clogged drain hose or pump, debris such as coins or lint blocking the system, or a failed drain pump.",
  },
  {
    q: "Washer Making Loud Noise or Vibrating",
    a: "Excessive noise or vibration during operation is often caused by an unbalanced load, worn-out bearings or suspension components, or an unlevel washing machine.",
  },
  {
    q: "Washer Leaking Water",
    a: "Water leaking from a washing machine may be due to damaged or loose hoses, a worn door seal in front-load washers, or faulty internal connections. Address quickly to prevent damage.",
  },
  {
    q: "Washer Stops Mid-Cycle",
    a: "If your washer stops in the middle of a cycle, it may be triggered by overload protection, a faulty control board, or timer malfunction.",
  },
  {
    q: "Washer Has Bad Smell or Mold",
    a: "Usually caused by detergent buildup, moisture retention, and poor ventilation, especially in front-load washers. Leaving the door open after use and regular cleaning can help.",
  },
  {
    q: "Washer Not Agitating",
    a: "When a washer does not agitate, the cause is often worn agitator components, motor problems, or transmission issues affecting drum movement.",
  },
  {
    q: "Washer Showing Error Codes",
    a: "Modern washing machines display error codes for sensor failures, door lock problems, or water supply errors, indicating that diagnostic or professional repair may be required.",
  },
];

const problems = [
  "Washer Won't Start",
  "Washer Not Filling with Water",
  "Washer Not Spinning",
  "Washer Not Draining",
  "Loud Noise or Vibrating",
  "Washer Leaking Water",
  "Washer Stops Mid-Cycle",
  "Washer Has Bad Smell or Mold",
  "Washer Not Agitating",
  "Washer Showing Error Codes",
];

const brands = [
  "Admiral", "Amana", "Bosch", "Dacor", "Crosley", "Electrolux",
  "Estate", "Fisher & Paykel", "Frigidaire", "General Electric", "GE Monogram", "GE Opal",
  "GE Profile", "Gibson", "Hotpoint", "Insignia", "Jenn-Air", "Kenmore",
  "KitchenAid", "LG", "Magic Chef", "Marvel", "Maytag", "Miele",
  "Samsung", "Speed Queen", "Sub-Zero", "Thermador", "U-Line", "Viking",
];

const features = [
  {
    title: "Fast, On-Time Service",
    desc: "Scheduling your washer repair should be simple! That's why we offer flexible appointment times, including same and next-day service.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
  },
  {
    title: "Factory-Trained Technicians",
    desc: "Whatever the brand or model, Appliance Fix VA is your go-to authorized service center for any washing machine repair in Arlington.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
  {
    title: "Same-Day Washing Machine Repairs",
    desc: "Our technicians arrive with fully stocked trucks, which means we can fix nearly any washer issue in just a single visit — saving you stress, time and money.",
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
    desc: "With technicians throughout the state, Appliance Fix VA is your best option for quick service, no matter where you're located.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
];

export default function WasherRepairPage() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            serviceType: "Washing Machine Repair",
            name: "Washer Repair in Arlington, VA",
            description:
              "Same-day washing machine repair in Arlington, Virginia. Certified technicians fix front-load, top-load washers, drainage, spin cycle and leaks for all brands.",
            path: "/washer-repair",
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
              Washer Repair in Arlington, Virginia
            </h1>
            <p className="text-white/65 text-[15px] leading-[1.7] mb-7 max-w-[440px]">
              Call by 2pm for Same-Day Service or Fast, Priority Scheduling. Whether your washer won&apos;t drain, isn&apos;t spinning or just doesn&apos;t work right — our Arlington washing machine repair experts can fix it quickly and affordably.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#order"
                className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
              >
                I Need Service
              </Link>
              <a
                href="tel:+18382013789"
                className="inline-flex items-center justify-center w-full sm:w-auto px-[30px] py-3.5 text-white text-[15px] font-semibold rounded-md border-[1.5px] border-white/[.45] hover:border-white hover:bg-white/[.08] transition-colors"
              >
                Call Us 24/7 (838) 201-3789
              </a>
            </div>
          </div>
          <div className="relative h-[260px] sm:h-[320px] lg:h-auto overflow-hidden">
            <Image
              src="/why-3.png"
              alt="Washing machine repair technician in Arlington, Virginia"
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
                Fast &amp; Affordable In-Home Washing Machine Repair Services
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[680px] mx-auto leading-[1.7]">
                Having problems with your washing machine? Whether your washer won&apos;t drain, isn&apos;t spinning or just isn&apos;t working right, our Arlington washer repair experts can fix the issue — quickly and affordably.
              </p>
            </div>
            <div className="max-w-[820px] mx-auto">
              <p className="text-sm text-slate-500 mb-5 text-center">
                Don&apos;t go another day with a broken washer! From repairs and maintenance to faulty part replacement, our experienced technicians can help with any washing machine problem, including:
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

        {/* CTA - Need Washer Fixed */}
        <section className="pb-16">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="bg-blue-light border border-blue-border rounded-xl p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Need your washer fixed today?</h3>
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
                Why Choose Us
              </span>
              <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-3">
                Washing Machine Repair Done Right: Quality Service By Certified Experts
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[680px] mx-auto leading-[1.7]">
                Washer breakdowns can significantly disrupt your daily routine. At Appliance Fix VA, we understand how inconvenient this can be. That&apos;s why we take pride in providing speedy and reliable appliance repairs at a fair price.
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

        {/* BRANDS */}
        <section className="py-14 bg-gray-bg">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-slate-900 mb-1">
                Your Local Washing Machine Service Center
              </h2>
              <p className="text-lg text-slate-500 font-normal mb-3">For All Major Brands &amp; Models</p>
              <p className="text-sm text-slate-500 max-w-[680px] mx-auto">
                It doesn&apos;t matter where or when you bought your washer. Our authorized repair experts service nearly all major appliance models and manufacturers.
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
                Ready to speak with a certified washer repair expert? Contact us anytime at{" "}
                <a href="tel:+18382013789" className="text-blue font-semibold">(838) 201-3789</a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          title="Washing Machine – Frequently Asked Questions"
          items={faqItems}
        />

        {/* NEED FAST REPAIR CTA */}
        <section className="py-16 bg-navy text-center">
          <div className="max-w-[640px] mx-auto px-6">
            <h2 className="text-white text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold mb-3">
              Need Fast Washing Machine Repair?
            </h2>
            <p className="text-white/65 text-[15px] mb-6 leading-[1.7]">
              We diagnose and fix all major washer issues — quickly and reliably.
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
                <span className="font-normal">The Trusted Name For Washing Machine Repair in Arlington</span>
              </h2>
              <p className="text-sm text-slate-500 mt-4 mb-8 leading-[1.75] text-center">
                Looking for help getting the most out of your home appliances? From the kitchen to the laundry room, Appliance Fix VA is your one-stop shop for all of your appliance repair needs. Here&apos;s how it works:
              </p>
              <div className="bg-gray-bg rounded-[10px] p-6 sm:p-7 mb-4">
                <p className="text-sm text-slate-900 leading-[1.75]">
                  <strong className="text-blue">1.</strong> &nbsp;<strong>Schedule Your Washer Repair:</strong>
                </p>
                <p className="text-sm text-slate-500 mt-2 ml-5 leading-[1.75]">
                  Call our 24/7 phone line, let us know about your washing machine problem and we&apos;ll find a technician to help you as soon as possible.
                </p>
              </div>
              <div className="bg-gray-bg rounded-[10px] p-6 sm:p-7 mb-7">
                <p className="text-sm text-slate-900 leading-[1.75]">
                  <strong className="text-blue">2.</strong> &nbsp;<strong>Your Washer Gets Fixed:</strong>
                </p>
                <p className="text-sm text-slate-500 mt-2 ml-5 leading-[1.75]">
                  Once your technician arrives, they will diagnose the problem and explain what work needs to be done. If you decide to proceed, your technician will have your washer fixed before you know it.
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
