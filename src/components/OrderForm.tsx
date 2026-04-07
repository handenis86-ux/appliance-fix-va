"use client";

export default function OrderForm() {
  return (
    <section id="order" className="pt-4 pb-12">
      <div className="max-w-[1160px] mx-auto px-6 text-center">
        <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-2">
          Order Service Now
        </h2>
        <p className="text-[15px] text-slate-500 mb-7">
          Fill out the form and we&apos;ll call you back within minutes to schedule your repair.
        </p>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-[720px] mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="px-3.5 py-3 border border-slate-200 rounded-md text-sm outline-none focus:border-blue transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="px-3.5 py-3 border border-slate-200 rounded-md text-sm outline-none focus:border-blue transition-colors"
          />
          <select
            required
            className="px-3.5 py-3 border border-slate-200 rounded-md text-sm text-slate-500 outline-none focus:border-blue bg-white transition-colors"
          >
            <option value="" disabled>Select Appliance</option>
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
            className="px-3.5 py-3 border border-slate-200 rounded-md text-sm outline-none focus:border-blue transition-colors"
          />
          <textarea
            placeholder="Describe the issue (optional)"
            rows={3}
            className="sm:col-span-2 px-3.5 py-3 border border-slate-200 rounded-md text-sm outline-none focus:border-blue resize-y transition-colors"
          />
          <div className="sm:col-span-2 text-center mt-1">
            <button
              type="submit"
              className="inline-flex items-center justify-center min-w-[240px] px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
            >
              Order Service Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
