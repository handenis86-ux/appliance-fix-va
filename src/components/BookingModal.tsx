"use client";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-[500px] w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Order Service Now</h2>
          <p className="text-sm text-slate-500">
            Fill out the form and we&apos;ll call you back within minutes.
          </p>
        </div>

        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! We'll call you back shortly.");
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="Your Name *"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm outline-none focus:border-blue transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm outline-none focus:border-blue transition-colors"
          />
          <input
            type="email"
            placeholder="Email (optional)"
            className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm outline-none focus:border-blue transition-colors"
          />
          <select
            required
            defaultValue=""
            className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm text-slate-700 outline-none focus:border-blue bg-white transition-colors"
          >
            <option value="" disabled>Select Appliance *</option>
            <option>Refrigerator</option>
            <option>Washer</option>
            <option>Dryer</option>
            <option>Oven / Stove</option>
            <option>Dishwasher</option>
            <option>Ice Machine</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            placeholder="Preferred Date / Time"
            className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm outline-none focus:border-blue transition-colors"
          />
          <textarea
            placeholder="Describe the issue (optional)"
            rows={3}
            className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm outline-none focus:border-blue resize-y transition-colors"
          />
          <button
            type="submit"
            className="w-full px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
          >
            Order Service Now
          </button>
          <p className="text-xs text-slate-400 text-center pt-1">
            Or call us directly at{" "}
            <a href="tel:+18382013789" className="text-blue font-semibold">
              (838) 201-3789
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
