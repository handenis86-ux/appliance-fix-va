import Image from "next/image";

const brands = [
  "Admiral", "Amana", "Bosch", "Dacor", "Crosley", "Electrolux",
  "Estate", "Fisher & Paykel", "Frigidaire", "General Electric", "GE Monogram", "GE Opal",
  "GE Profile", "Gibson", "Hotpoint", "Insignia", "Jenn-Air", "Kenmore",
  "KitchenAid", "LG", "Magic Chef", "Marvel", "Maytag", "Miele",
  "Samsung", "Speed Queen", "Sub-Zero", "Thermador", "U-Line", "Viking",
];

export default function BrandsFull() {
  return (
    <section className="py-14 bg-gray-bg">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-slate-900 mb-1">
            Your Local Appliance Service Center
          </h2>
          <p className="text-lg text-slate-500 font-normal mb-3">For All Major Brands &amp; Models</p>
          <p className="text-sm text-slate-500 max-w-[600px] mx-auto">
            It doesn&apos;t matter where or when you bought your appliance. Our authorized repair experts service nearly all major appliance models and manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-8 items-stretch">
          {/* Left: image */}
          <div className="relative rounded-xl overflow-hidden min-h-[280px] lg:min-h-0 order-2 lg:order-1">
            <Image
              src="/brands.png"
              alt="Certified appliance repair technician"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[.15em] text-white/90 font-semibold mb-1.5">Certified Experts</p>
              <h3 className="text-xl font-bold mb-2 text-white">30+ Brands We Service</h3>
              <p className="text-[13px] text-white/80 mb-4 leading-relaxed">
                Factory-trained technicians ready to fix your appliance today.
              </p>
              <a
                href="tel:+18382013789"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-navy text-[13px] font-semibold rounded-md hover:bg-blue-light transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (838) 201-3789
              </a>
            </div>
          </div>

          {/* Right: brands grid */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 order-1 lg:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="flex items-center gap-2 py-2 text-[13px] text-slate-600 border-b border-slate-100 last:border-b-0"
                >
                  <span className="w-1 h-1 rounded-full bg-blue flex-shrink-0" />
                  <span className="truncate">{brand}</span>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-slate-500 mt-5 pt-4 border-t border-slate-100 text-center">
              Ready to speak with a certified expert? Call{" "}
              <a href="tel:+18382013789" className="text-blue font-semibold">(838) 201-3789</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
