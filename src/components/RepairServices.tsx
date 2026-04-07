import Image from "next/image";

const services = [
  "Laundry Machine Repair",
  "Washer Repair",
  "Dryer Repair",
  "Kitchen Appliance Repair",
  "Refrigerator Repair",
  "Freezer Repair",
  "Ice Maker Repair",
  "Dishwasher Repair",
  "Oven & Range Repair",
  "Stove & Cooktop Repair",
  "Beverage Center Repair",
  "Ice Machine Repair",
];

export default function RepairServices() {
  return (
    <section className="py-14 lg:py-16">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-10 items-start">
          <div>
            <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-2">
              <span className="font-extrabold">Quick &amp; Affordable</span> In-Home Appliance Repair Services
            </h2>
            <p className="text-sm text-slate-500 mb-7 max-w-[520px]">
              If you need an appliance repair, you&apos;ve come to the right place! From minor issues to major breakdowns, we have technicians standing by, ready to fix any appliance problem — no matter where you bought it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {services.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center justify-between py-3 pr-4 text-sm font-medium text-slate-700 ${
                    i < services.length - 2 ? "border-b border-slate-200" : ""
                  }`}
                >
                  {item}
                  <span className="text-blue text-xs">&rsaquo;</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-light rounded-xl overflow-hidden border border-blue-border">
            <div className="h-[200px] relative overflow-hidden bg-blue-border">
              <Image
                src="/hero.jpg"
                alt="Appliance repair technician"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">Appliance Repairs</h3>
              <p className="text-[13px] text-slate-500 mb-4">
                Need Your Repair Done Today?
                <br />
                Call Now For Fast Service.
              </p>
              <a
                href="tel:+18382013789"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (838) 201-3789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
