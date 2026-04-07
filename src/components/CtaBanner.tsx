import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-navy py-16 text-center">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="text-white text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold mb-2.5">
          Need Appliance Repair Today?
        </h2>
        <p className="text-white/55 text-[15px] mb-7">
          Call (838) 201-3789 for fast, reliable appliance repair in Arlington, VA. Same-day service available.
        </p>
        <Link
          href="#order"
          className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
        >
          Book Repair Now
        </Link>
      </div>
    </section>
  );
}
