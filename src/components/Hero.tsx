import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-navy grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[440px]">
      <div className="flex flex-col justify-center px-6 py-12 lg:py-14 lg:pl-[max(calc((100vw-1160px)/2+24px),24px)] lg:pr-12">
        <h1 className="text-white text-[clamp(1.9rem,4vw,2.6rem)] font-extrabold leading-[1.15] mb-3.5">
          Fast &amp; Reliable Appliance Repair in Arlington, VA
        </h1>
        <p className="text-white/65 text-[15px] leading-[1.7] mb-7 max-w-[420px]">
          Same-day service. Certified technicians. All major brands.
          <br />
          Call by 6pm for Same-Day Service or Fast, Priority Scheduling.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="#order"
            className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
          >
            Book Now
          </Link>
          <a
            href="tel:+18382013789"
            className="inline-flex items-center justify-center px-[30px] py-3.5 text-white text-[15px] font-semibold rounded-md border-[1.5px] border-white/[.45] hover:border-white hover:bg-white/[.08] transition-colors"
          >
            Call (838) 201-3789
          </a>
        </div>
      </div>
      <div className="relative h-[260px] sm:h-[320px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Appliance repair technician fixing refrigerator in kitchen"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
