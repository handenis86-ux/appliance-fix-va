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
        <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-slate-900 mb-1">
          Your Local Appliance Service Center
        </h2>
        <p className="text-xl text-slate-500 font-normal mb-4">For All Major Brands &amp; Models</p>
        <p className="text-sm text-slate-500 mb-8 max-w-[560px]">
          It doesn&apos;t matter where or when you bought your appliance. Our authorized repair experts service nearly all major appliance models and manufacturers. Here are some of the most common brands our factory trained technicians service:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-slate-200">
          {brands.map((brand, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const isLastRow = row === Math.floor((brands.length - 1) / 3);
            return (
              <div
                key={brand}
                className={`flex items-center justify-between px-4 py-3 text-sm ${
                  !isLastRow ? "border-b border-slate-200" : ""
                } ${col < 2 ? "sm:border-r sm:border-slate-200" : ""}`}
              >
                {brand}
                <span className="text-blue text-xs">&rsaquo;</span>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-slate-500 mt-7">
          Ready to speak with a certified appliance repair expert? Contact us anytime, day or night at{" "}
          <a href="tel:+18382013789" className="text-blue font-semibold">(838) 201-3789</a> to troubleshoot a problem, schedule your appointment or request a quote.
        </p>
      </div>
    </section>
  );
}
