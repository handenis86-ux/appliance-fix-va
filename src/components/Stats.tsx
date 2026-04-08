import Link from "next/link";

export default function Stats() {
  return (
    <section className="py-14 text-center">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="text-[clamp(2.4rem,5vw,3.2rem)] font-extrabold text-blue mb-1">+2,500</div>
        <p className="text-[15px] text-slate-500 mb-7">Appliances repaired in Arlington area</p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10">
          <div>
            <div className="text-2xl font-extrabold text-slate-900">+500</div>
            <p className="text-xs text-slate-400">Happy clients</p>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">+350</div>
            <p className="text-xs text-slate-400">5-star reviews</p>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">12</div>
            <p className="text-xs text-slate-400">Certified techs</p>
          </div>
        </div>
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold text-slate-900 mb-5">
          Schedule Your Home Service Today
        </h2>
        <Link
          href="#order"
          className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
