import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Appliance Repair in Arlington, VA | Appliance Fix VA",
  description:
    "Trusted appliance repair in Arlington, Virginia. Same-day service for refrigerators, washers, dryers, dishwashers, ovens and more. Call (838) 201-3789.",
  openGraph: {
    title: "Appliance Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Trusted appliance repair in Arlington, VA. Same-day service available. Call (838) 201-3789.",
    type: "website",
  },
};

const services = [
  {
    title: "Refrigerator Repair",
    desc: "Fast fixes for cooling issues, leaks and noisy compressors. Same-day service available.",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="4" y1="10" x2="20" y2="10" /><line x1="10" y1="6" x2="10" y2="6.01" /><line x1="10" y1="14" x2="10" y2="14.01" /></svg>
    ),
  },
  {
    title: "Dryer Repair",
    desc: "No heat or tumbling issues? We restore your dryer's performance quickly and safely.",
    icon: (
      <svg viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /><circle cx="8" cy="6" r="2" fill="#fff" /><circle cx="16" cy="12" r="2" fill="#fff" /><circle cx="10" cy="18" r="2" fill="#fff" /></svg>
    ),
  },
  {
    title: "Dishwasher Repair",
    desc: "Stop hand washing. We resolve drainage issues, water leaks and power failures.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z" /><path d="M5 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" /><path d="M19 14l.75 1.5L21.5 16.25 19.75 17 19 18.5 18.25 17 16.5 16.25l1.75-.75L19 14z" /></svg>
    ),
  },
  {
    title: "Washer Repair",
    desc: "Expert diagnostics for leaks, draining problems and spin cycle failures on all major brands.",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="20" rx="2" /><circle cx="12" cy="13" r="5" /><circle cx="7" cy="5" r=".8" fill="#2563eb" stroke="none" /><circle cx="9.5" cy="5" r=".8" fill="#2563eb" stroke="none" /></svg>
    ),
  },
  {
    title: "Oven & Stove Repair",
    desc: "Reliable repair for gas and electric ovens. We fix heating elements and control boards.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2c-4 4-6 8-6 12a6 6 0 0 0 12 0c0-4-2-8-6-12z" /><path d="M12 22a3 3 0 0 1-3-3c0-2 1-4 3-6 2 2 3 4 3 6a3 3 0 0 1-3 3z" fill="#fff" /></svg>
    ),
  },
  {
    title: "Washing Machine Repair",
    desc: "Complete washing machine repair for all brands. We handle vibration, noise and drainage issues.",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="20" rx="2" /><circle cx="12" cy="13" r="5" /><circle cx="12" cy="13" r="2" /><circle cx="7" cy="5" r=".8" fill="#2563eb" stroke="none" /></svg>
    ),
  },
];

const areas = [
  "Arlington",
  "Crystal City",
  "Fort Myer",
  "Potomac Yard",
  "Rosslyn",
  "Ballston",
  "Pentagon City",
  "Clarendon",
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "4.9\u2605", label: "Average Rating" },
  { value: "24/7", label: "Support Available" },
  { value: "90%", label: "Same-Day Completion" },
];

export default function ArlingtonPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-blue py-16 lg:py-20">
          <div className="max-w-[1160px] mx-auto px-6 text-center">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[.12em] text-blue-light bg-white/15 px-3 py-1 rounded-full mb-4">
              Service Area
            </span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight mb-4">
              Appliance Repair in Arlington, VA
            </h1>
            <p className="text-white/70 text-[15px] max-w-[560px] mx-auto mb-8">
              Trusted local appliance repair serving Arlington and surrounding areas.
              Fast, reliable same-day service from certified technicians you can count on.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="#order"
                className="inline-flex items-center px-7 py-3 bg-white text-slate-900 text-[15px] font-semibold rounded-md hover:bg-slate-100 transition-colors"
              >
                Book Repair
              </Link>
              <a
                href="tel:+18382013789"
                className="inline-flex items-center px-7 py-3 border border-white text-white text-[15px] font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Call (838) 201-3789
              </a>
            </div>
          </div>
        </section>

        {/* Services in Arlington */}
        <section className="py-16 lg:py-[72px]">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="text-center mb-10 lg:mb-11">
              <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-2.5">
                Appliance Repair Services in Arlington
              </h2>
              <p className="text-[15px] text-slate-500 max-w-[520px] mx-auto">
                We fix all major household appliances in Arlington, VA and the surrounding neighborhoods.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[18px]">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-white border border-slate-200 rounded-[10px] p-7 text-left hover:border-blue hover:shadow-[0_4px_16px_rgba(37,99,235,.08)] transition-all"
                >
                  <div className="w-10 h-10 mb-4 flex items-center justify-center [&>svg]:w-7 [&>svg]:h-7 [&>svg]:stroke-blue [&>svg]:fill-none [&>svg]:stroke-[1.5] [&>svg]:stroke-linecap-round [&>svg]:stroke-linejoin-round">
                    {s.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-1.5">{s.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
                  <Link href="#" className="inline-block mt-3.5 text-[13px] font-semibold text-blue hover:underline">
                    Learn More &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serving Arlington & Nearby Areas */}
        <section className="py-16 lg:py-[72px] bg-white">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-4">
                  Serving Arlington &amp; Nearby Areas
                </h2>
                <p className="text-[15px] text-slate-500 leading-relaxed mb-6">
                  Our certified technicians provide fast, affordable appliance repair across
                  Arlington and all nearby communities. No matter where you are in the area,
                  we bring expert service right to your door.
                </p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                  {areas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-[14px] text-slate-700">
                      <svg className="w-4 h-4 text-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/hero.jpg"
                  alt="Aerial view of Arlington, Virginia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats */}
        <section className="py-16 lg:py-[72px]">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 text-center mb-10">
              Why Arlington Residents Trust Us
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[18px]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-slate-200 rounded-[10px] p-6 text-center"
                >
                  <div className="text-[clamp(1.6rem,3vw,2rem)] font-extrabold text-blue mb-1">
                    {s.value}
                  </div>
                  <p className="text-[13px] text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-blue py-16 text-center">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-white text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold mb-2.5">
              Need Appliance Repair in Arlington?
            </h2>
            <p className="text-white/60 text-[15px] max-w-[520px] mx-auto mb-7">
              Our certified technicians are ready to help. Same-day appointments available
              for most appliance repairs in the Arlington area.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+18382013789"
                className="inline-flex items-center px-7 py-3.5 bg-navy text-white text-[15px] font-semibold rounded-md hover:bg-slate-800 transition-colors"
              >
                Call (838) 201-3789
              </a>
              <Link
                href="#order"
                className="inline-flex items-center px-7 py-3.5 border border-white text-white text-[15px] font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
