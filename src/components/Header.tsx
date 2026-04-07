"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import BookingModal from "./BookingModal";

const services = [
  { label: "Refrigerator Repair", href: "/#services" },
  { label: "Washer Repair", href: "/#services" },
  { label: "Dryer Repair", href: "/#services" },
  { label: "Oven & Stove Repair", href: "/oven-repair" },
  { label: "Dishwasher Repair", href: "/#services" },
  { label: "Ice Machine Repair", href: "/#services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    if (servicesOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [servicesOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between h-[62px]">
          <Link href="/" className="text-[17px] font-extrabold text-slate-900">
            Appliance Fix <span className="text-blue">VA</span>
          </Link>

          <nav className="hidden md:flex gap-7 items-center">
            <Link
              href="/"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1"
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[240px] bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-light hover:text-blue transition-colors border-b border-slate-100 last:border-b-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/arlington"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Areas We Serve
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+18382013789" className="hidden sm:block text-sm font-semibold text-slate-900">
              Call (838) 201-3789
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-md hover:bg-blue-hover transition-colors"
            >
              Book Now
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-[5px] p-1.5"
              aria-label="Menu"
            >
              <span className="block w-[22px] h-[2px] bg-slate-900 rounded-sm" />
              <span className="block w-[22px] h-[2px] bg-slate-900 rounded-sm" />
              <span className="block w-[22px] h-[2px] bg-slate-900 rounded-sm" />
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-slate-500 hover:text-slate-900"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center justify-between"
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 ml-3 flex flex-col gap-2 border-l-2 border-slate-100 pl-3">
                  {services.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="text-[13px] text-slate-500 hover:text-blue py-1"
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/arlington"
              className="text-sm font-medium text-slate-500 hover:text-slate-900"
              onClick={() => setOpen(false)}
            >
              Areas We Serve
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-slate-500 hover:text-slate-900"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <button
              onClick={() => {
                setOpen(false);
                setModalOpen(true);
              }}
              className="mt-2 px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-md text-center"
            >
              Book Now
            </button>
            <a
              href="tel:+18382013789"
              className="text-sm font-semibold text-blue text-center"
            >
              Call (838) 201-3789
            </a>
          </nav>
        )}
      </header>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
