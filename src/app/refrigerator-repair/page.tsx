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
  title: "Refrigerator Repair in Arlington, VA | Same-Day Service",
  description:
    "Same-day refrigerator repair in Arlington, VA. Fridge not cooling, ice maker, leaks — all brands. Call (838) 201-3789 for a free estimate.",
  keywords: [
    "refrigerator repair Arlington VA",
    "fridge repair Arlington Virginia",
    "same day refrigerator repair",
    "ice maker repair Arlington",
    "refrigerator not cooling Arlington",
    "Sub-Zero repair Arlington",
  ],
  alternates: {
    canonical: "/refrigerator-repair",
  },
  openGraph: {
    type: "website",
    url: "/refrigerator-repair",
    title: "Refrigerator Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day refrigerator repair in Arlington, Virginia. Call (838) 201-3789 for a free estimate.",
    images: [
      {
        url: "/why-2.png",
        width: 1200,
        height: 630,
        alt: "Refrigerator repair service in Arlington, Virginia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refrigerator Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day refrigerator repair in Arlington, VA. Call (838) 201-3789.",
    images: ["/why-2.png"],
  },
};

const faqItems = [
  {
    q: "Why is my refrigerator not cooling?",
    a: "Most often due to dirty coils, airflow issues or a faulty fan, defrost system issue. Book cooling repair to fix the malfunction.",
  },
  {
    q: "Why is my freezer full of ice?",
    a: "This usually means your defrost system isn't working. It can block airflow and stop cooling. Possible causes — door seal leak, thermostat issues. This often leads to full cooling failure if ignored.",
  },
  {
    q: "Why is my fridge leaking water?",
    a: "Water inside or under your fridge. Typically caused by a clogged drain or water line issue. Book repair to stop the leak.",
  },
  {
    q: "Why is my refrigerator making noise?",
    a: "The fridge is buzzing, clicking or rattling sounds. Possible causes are compressor issues, fan problems, or start relay failure. Early diagnosis prevents expensive damage.",
  },
  {
    q: "Ice maker not working — can you fix it?",
    a: "No ice or slow production. Possible causes — frozen waterline, valve issues, ice maker failure. Often repairable without full replacement.",
  },
  {
    q: "Fridge not turning on at all",
    a: "Your fridge is completely off. Possible causes — power issue, control board failure, compressor problem. We check simple fixes first to save you money.",
  },
  {
    q: "Is it worth repairing a refrigerator?",
    a: "Yes, especially if it's under 10 years old and repair cost is less than replacement.",
  },
  {
    q: "How fast can you fix it?",
    a: "Most repairs are completed the same day or within 24-48 hours if parts are needed.",
  },
];

const problems = [
  "Refrigerator Won't Get Cold",
  "Refrigerator Not Making Ice",
  "Freezer Full of Ice / Frost",
  "Fridge Leaking Water",
  "Strange Noises (Buzzing, Clicking)",
  "Water Dispenser Not Working",
  "Compressor Issues",
  "Door Seal Not Sealing",
  "Temperature Fluctuations",
  "Fridge Completely Stopped Working",
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
    desc: "Scheduling your refrigerator repair should be simple! That's why we offer flexible appointment times, including same and next-day service.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
  },
  {
    title: "Factory-Trained Technicians",
    desc: "Whatever the brand or model, Appliance Fix VA is your go-to authorized service center for any refrigerator repair in Arlington.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
  {
    title: "Same-Day Refrigerator Repairs",
    desc: "Our technicians arrive with fully stocked trucks, which means we can fix nearly any fridge issue in just a single visit — saving you stress, time and money.",
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

export default function RefrigeratorRepairPage() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            serviceType: "Refrigerator Repair",
            name: "Refrigerator Repair in Arlington, VA",
            description:
              "Same-day refrigerator and freezer repair in Arlington, Virginia. Certified technicians fix cooling issues, ice makers, leaks and compressors for all major brands.",
            path: "/refrigerator-repair",
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
              Refrigerator Repair in Arlington, Virginia
            </h1>
            <p className="text-white/65 text-[15px] leading-[1.7] mb-7 max-w-[440px]">
              Call by 1pm for Same-Day Service or Fast, Priority Scheduling. Whether your refrigerator won&apos;t get cold, isn&apos;t making ice or completely stopped working — our certified experts solve any problem.
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
              alt="Refrigerator repair service in Arlington, Virginia"
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
                Fast &amp; Affordable In-Home Refrigerator Repair Services
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[680px] mx-auto leading-[1.7]">
                Is your refrigerator acting up? Whether it won&apos;t cool, is leaking water or has stopped working entirely, our Arlington refrigerator repair experts can diagnose and fix the issue — quickly and affordably.
              </p>
            </div>
            <div className="max-w-[820px] mx-auto">
              <p className="text-sm text-slate-500 mb-5 text-center">
                Don&apos;t risk spoiled food or rising energy bills! From repairs and maintenance to faulty part replacement, our experienced technicians can help with any fridge problem, including:
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

        {/* CTA - Need Refrigerator Fixed */}
        <section className="pb-16">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="bg-blue-light border border-blue-border rounded-xl p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Need your refrigerator repair done today?</h3>
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
                Refrigerator Repair Done Right: Quality Service By Certified Experts
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[680px] mx-auto leading-[1.7]">
                A broken refrigerator can significantly disrupt your daily life — and put your groceries at risk. At Appliance Fix VA, we understand how inconvenient this can be. That&apos;s why we take pride in providing speedy and reliable appliance repairs at a fair price.
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
                Your Local Refrigerator Service Center
              </h2>
              <p className="text-lg text-slate-500 font-normal mb-3">For All Major Brands &amp; Models</p>
              <p className="text-sm text-slate-500 max-w-[680px] mx-auto">
                It doesn&apos;t matter where or when you bought your refrigerator. Our authorized repair experts service nearly all major appliance models and manufacturers.
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
                Ready to speak with a certified refrigerator repair expert? Contact us anytime at{" "}
                <a href="tel:+18382013789" className="text-blue font-semibold">(838) 201-3789</a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          title="Refrigerator Repair – Frequently Asked Questions"
          items={faqItems}
        />

        {/* NEED FAST REPAIR CTA */}
        <section className="py-16 bg-navy text-center">
          <div className="max-w-[640px] mx-auto px-6">
            <h2 className="text-white text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold mb-3">
              Need Fast Refrigerator Repair?
            </h2>
            <p className="text-white/65 text-[15px] mb-6 leading-[1.7]">
              We diagnose and fix all major refrigerator and freezer issues — quickly and reliably.
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
                <span className="font-normal">The Trusted Name For Refrigerator Repair in Arlington</span>
              </h2>
              <p className="text-sm text-slate-500 mt-4 mb-8 leading-[1.75] text-center">
                Looking for help getting the most out of your home appliances? From the kitchen to the laundry room, Appliance Fix VA is your one-stop shop for all of your appliance repair needs. Here&apos;s how it works:
              </p>
              <div className="bg-gray-bg rounded-[10px] p-6 sm:p-7 mb-4">
                <p className="text-sm text-slate-900 leading-[1.75]">
                  <strong className="text-blue">1.</strong> &nbsp;<strong>Schedule Your Refrigerator Repair:</strong>
                </p>
                <p className="text-sm text-slate-500 mt-2 ml-5 leading-[1.75]">
                  Call our 24/7 phone line, let us know about your refrigerator problem and we&apos;ll find a technician to help you as soon as possible.
                </p>
              </div>
              <div className="bg-gray-bg rounded-[10px] p-6 sm:p-7 mb-7">
                <p className="text-sm text-slate-900 leading-[1.75]">
                  <strong className="text-blue">2.</strong> &nbsp;<strong>Your Fridge Gets Fixed:</strong>
                </p>
                <p className="text-sm text-slate-500 mt-2 ml-5 leading-[1.75]">
                  Once your technician arrives, they will diagnose the problem and explain what work needs to be done. If you decide to proceed, your technician will have your refrigerator fixed before you know it.
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
