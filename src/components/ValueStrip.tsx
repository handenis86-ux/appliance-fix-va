interface ValueStripProps {
  items?: string[];
}

const defaultItems: string[] = [
  "Certified Technicians",
  "We Service All Brands & Models",
  "Same & Next Day Appointments",
  "24-Hour Support 7 Days a Week",
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ValueStrip({ items = defaultItems }: ValueStripProps) {
  return (
    <div className="bg-navy border-t border-white/[.08]">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((text, i) => (
          <div
            key={text}
            className={`flex items-center justify-center gap-2.5 px-4 py-5 text-center ${
              i < items.length - 1 ? "lg:border-r lg:border-white/[.08]" : ""
            }`}
          >
            <Check />
            <span className="text-white text-[13px] font-semibold">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
