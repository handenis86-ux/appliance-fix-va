import Link from "next/link";

export default function NeedRepairCta() {
  return (
    <section className="py-10 bg-gray-bg text-center">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="text-base text-slate-700 mb-5">
          Need your appliance fixed today? Call us now at{" "}
          <a href="tel:+18382013789" className="text-blue font-bold">
            (838) 201-3789
          </a>{" "}
          and we&apos;ll send a technician over as soon as possible.
        </p>
        <Link
          href="#order"
          className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
        >
          Order Service Now
        </Link>
      </div>
    </section>
  );
}
