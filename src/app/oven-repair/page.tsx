import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Oven Repair in Arlington, VA | Same-Day Service | Appliance Fix VA",
  description:
    "Professional oven and stove repair in Arlington, Virginia. Same-day service for all oven types and major brands. Call (838) 201-3789 for fast, affordable repairs.",
  openGraph: {
    title: "Oven Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Professional oven repair in Arlington, Virginia. Same-day service. Call (838) 201-3789.",
    type: "website",
  },
};

const problems = [
  "Oven doesn't turn on",
  "Oven not getting hot enough",
  "Oven fan won't work",
  "Oven keeps overheating",
  "Oven doesn't cook evenly",
  "Temperature not adjusting",
  "Self-cleaning not working",
  "Oven makes strange noises",
  "Oven not getting gas",
  "Oven doesn't preheat",
  "Control panel issues",
  "Range/stove top issues",
];

const repairTypes = [
  "Gas oven repair",
  "Electric oven repair",
  "Convection oven repair",
  "Wall oven repair",
  "Double oven repair",
  "Range & stove top repair",
  "Oven thermostat replacement",
  "Oven igniter repair",
  "Heating element replacement",
  "Control board repair",
];

const qualityCards = [
  {
    title: "Fast On-Time Service",
    desc: "We offer flexible scheduling with same-day and next-day appointments to fit your busy life. Our technicians arrive on time, every time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
  },
  {
    title: "Factory-Trained Technicians",
    desc: "Our certified experts are trained on all major oven brands and models, ensuring professional care and long-lasting repairs.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
  {
    title: "Same-Day Repairs",
    desc: "Our trucks arrive fully stocked with parts so we can diagnose and fix your oven on the spot — no waiting for parts to arrive.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    ),
  },
];

const ovenTypes = [
  "Gas Ovens",
  "Electric Ovens",
  "Convection Ovens",
  "Conduction Ovens",
  "Double Ovens",
  "Wall Ovens",
  "Oven Ranges/Stove Tops",
];

const brands = [
  "Admiral", "Amana", "Bosch", "Dacor", "Crosley", "Electrolux",
  "Estate", "Fisher & Paykel", "Frigidaire", "General Electric", "GE Monogram", "GE Opal",
  "GE Profile", "Gibson", "Hotpoint", "Insignia", "Jenn-Air", "Kenmore",
  "KitchenAid", "LG", "Magic Chef", "Marvel", "Maytag", "Miele",
  "Samsung", "Speed Queen", "Sub-Zero", "Thermador", "U-Line", "Viking",
];

const faqs = [
  {
    q: "Oven Not Heating Properly",
    a: "A faulty heating element, broken igniter, or malfunctioning thermostat can cause uneven or insufficient heating. Our technicians diagnose the root cause and restore proper heat output.",
  },
  {
    q: "Stove Burners Not Working",
    a: "Clogged burner ports, faulty igniters, or electrical issues can prevent burners from lighting. We clean, repair, or replace components to get your stovetop working again.",
  },
  {
    q: "Oven Not Turning On",
    a: "This could be caused by a tripped breaker, faulty wiring, a broken control board, or a defective thermal fuse. We identify and fix the issue quickly.",
  },
  {
    q: "Oven Temperature Is Inaccurate",
    a: "A worn-out temperature sensor or failing thermostat can cause your oven to run too hot or too cold. We recalibrate or replace sensors to restore accuracy.",
  },
  {
    q: "Gas Smell or Ignition Problems",
    a: "If you smell gas or your oven won't ignite, it may be a faulty gas valve, damaged igniter, or loose connection. We address gas issues safely and thoroughly.",
  },
  {
    q: "Control Panel Not Responding",
    a: "Unresponsive buttons or displays often indicate a failing control board or membrane switch. We repair or replace electronic controls to restore full functionality.",
  },
  {
    q: "Self-Cleaning Not Working",
    a: "A malfunctioning door lock, faulty thermostat, or wiring issue can prevent the self-clean cycle from activating. We diagnose and fix the problem so you can use this feature again.",
  },
  {
    q: "Oven Door Won't Close Properly",
    a: "Worn hinges, a damaged door seal, or a misaligned latch can prevent proper closure, causing heat loss and uneven cooking. We repair or replace door components for a tight seal.",
  },
];

const steps = [
  {
    num: "1",
    title: "Schedule",
    desc: "Book your appointment online or call us at (838) 201-3789. We offer same-day and next-day availability.",
  },
  {
    num: "2",
    title: "We Diagnose & Fix",
    desc: "Our certified technician arrives on time, diagnoses the issue, and repairs your oven on the spot with genuine parts.",
  },
  {
    num: "3",
    title: "Enjoy Peace of Mind",
    desc: "Your oven is back in working order, backed by our 90-day warranty on parts and labor.",
  },
];

export default function OvenRepairPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gray-bg py-16">
          <div className="max-w-[1160px] mx-auto px-6">
            <span className="inline-block text-sm font-semibold text-blue bg-blue-light px-3 py-1 rounded-full mb-4">
              Oven Repair
            </span>
            <h1 className="text-[clamp(1.7rem,4vw,2.6rem)] font-bold text-slate-900 leading-tight mb-4">
              Oven Repairs in Arlington, Virginia
            </h1>
            <p className="text-[15px] text-slate-500 max-w-[540px] mb-7 leading-relaxed">
              Is your oven not heating, cooking unevenly, or refusing to turn on? Our certified
              technicians provide fast, same-day oven repair service across Arlington and surrounding
              areas. We fix all brands and models at affordable, upfront prices.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#order"
                className="inline-flex items-center px-[26px] py-3 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
              >
                Book Repair
              </Link>
              <a
                href="tel:+18382013789"
                className="inline-flex items-center px-[26px] py-3 border border-slate-300 text-slate-900 text-[15px] font-semibold rounded-md hover:bg-slate-50 transition-colors"
              >
                Call (838) 201-3789
              </a>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="py-14">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-center text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-8">
              Common Oven &amp; Stove Problems We Fix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 max-w-[700px] mx-auto">
              {problems.map((p) => (
                <div key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-blue shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick & Affordable */}
        <section className="py-14 bg-gray-bg">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-3">
              Quick &amp; Affordable In-Home Oven &amp; Range Repair Services
            </h2>
            <p className="text-[15px] text-slate-500 max-w-[620px] mb-8 leading-relaxed">
              From minor fixes to complex repairs, our factory-trained technicians handle it all.
              We arrive with fully stocked trucks and genuine parts to get your oven running again
              in a single visit — saving you time and money.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2.5 max-w-[620px]">
              {repairTypes.map((r) => (
                <div key={r} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="text-blue text-xs">&rsaquo;</span>
                  {r}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Service */}
        <section className="py-14">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-2.5">
                Oven Repair Done Right: Quality Service By Certified Experts
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[540px] mx-auto">
                We combine speed, expertise, and genuine parts to deliver oven repairs that last.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {qualityCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-gray-bg rounded-[10px] p-6 flex gap-3.5 items-start"
                >
                  <div className="min-w-[40px] h-10 bg-blue rounded-lg flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{card.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oven Types */}
        <section className="py-14 bg-gray-bg">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-center text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-8">
              We Repair All Types of Ovens
            </h2>
            <div className="flex flex-wrap justify-center gap-2.5">
              {ovenTypes.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-14">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-8">
              Major Oven Brands We Service
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-slate-200">
              {brands.map((brand, i) => {
                const row = Math.floor(i / 3);
                const isLastRow = row === Math.floor((brands.length - 1) / 3);
                const col = i % 3;
                return (
                  <div
                    key={brand}
                    className={`flex items-center justify-between px-4 py-3 text-sm ${
                      !isLastRow ? "border-b border-slate-200" : ""
                    } ${col < 2 ? "sm:border-r sm:border-slate-200" : ""}`}
                  >
                    {brand}
                    <span className="text-blue text-xs">&rsaquo;</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-gray-bg">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-center text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="text-sm leading-[1.7] max-w-[820px] mx-auto">
              {faqs.map((f, i) => (
                <p key={i} className={i < faqs.length - 1 ? "mb-3.5" : ""}>
                  <strong className="text-slate-900">
                    {i + 1}. {f.q}
                  </strong>{" "}
                  <span className="text-slate-500">&ndash; {f.a}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-14">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-center text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-10">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-11 h-11 bg-blue rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {step.num}
                  </div>
                  <h4 className="text-[15px] font-bold text-slate-900 mb-1.5">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-[300px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 text-center">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-white text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold mb-2.5">
              Ready to Get Your Oven Fixed?
            </h2>
            <p className="text-white/55 text-[15px] mb-7">
              Call (838) 201-3789 for fast, reliable oven repair in Arlington, VA. Same-day service available.
            </p>
            <Link
              href="#order"
              className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
            >
              Book Repair Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
