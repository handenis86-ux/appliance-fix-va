"use client";
import { useState } from "react";
import Link from "next/link";
import BookingModal from "./BookingModal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Oven Repair", href: "/oven-repair" },
  { label: "Areas We Serve", href: "/arlington" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between h-[62px]">
          <Link href="/" className="text-[17px] font-extrabold text-slate-900">
            Appliance Fix <span className="text-blue">VA</span>
          </Link>

          <nav className="hidden md:flex gap-7">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-500 hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
