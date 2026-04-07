"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How quickly can I schedule repair?",
    a: "We offer same-day or next-day service appointments across Arlington, often completing repairs in a single visit.",
  },
  {
    q: "Is there a warranty on your work?",
    a: "All repairs come with a 90-day warranty on both parts and labor. We use factory-certified parts for long-term reliability.",
  },
  {
    q: "Are your technicians certified?",
    a: "Yes, our team consists of background-checked, factory-authorized experts with the latest appliance technology expertise.",
  },
  {
    q: "Which brands do you service?",
    a: "All major brands including Samsung, LG, Whirlpool, GE, Maytag, and Bosch — both premium and standard models.",
  },
  {
    q: "How much does a service call cost?",
    a: "We provide a transparent flat-rate diagnostic fee. If you proceed with repair, the fee is waived (applied toward total cost).",
  },
  {
    q: "Do you use original spare parts?",
    a: "We only use genuine parts sourced from authorized distributors, ensuring factory-spec operation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-gray-bg">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 mb-6">FAQ</h2>
        <div className="max-w-[820px] mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-slate-200 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-slate-900 group-hover:text-blue transition-colors">
                    {i + 1}. {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-500"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-slate-500 leading-[1.7] pr-10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
