import Image from "next/image";

const items = [
  {
    title: "Fast, On-Time Service",
    desc: "Scheduling your appliance repair should be simple and stress-free. That's why we offer flexible appointment times, including same-day and next-day service, to fit your busy lifestyle. We value your time and ensure our technicians arrive promptly to get your household back to normal as quickly as possible.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    image: "/why-1.png",
    imagePosition: "right" as const,
  },
  {
    title: "Factory-Trained Technicians",
    desc: "Whatever the brand or model, Appliance Fix VA is your go-to authorized service center for any home appliance repairs in Arlington. Our technicians are factory-trained and highly experienced, ensuring that your high-end or standard range receives the professional care it deserves. We take pride in providing quality service you can trust.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    image: "/why-2.png",
    imagePosition: "left" as const,
  },
  {
    title: "Same-Day Repairs",
    desc: "We know you're busy, which is why our technicians arrive with fully stocked trucks. This means we can diagnose and fix nearly any appliance issue on the spot, saving you stress, time, and money. No more waiting for days for parts to arrive — we get it done right the first time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    image: "/why-3.png",
    imagePosition: "right" as const,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-2.5">
            Why Choose Us
          </h2>
          <p className="text-[15px] text-slate-500 max-w-[520px] mx-auto">
            Experience the best appliance repair in Arlington with our certified professionals.
          </p>
        </div>
        <div className="space-y-6">
          {items.map((item) => {
            const imageOnRight = item.imagePosition === "right";
            return (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-2 bg-gray-bg rounded-xl overflow-hidden border border-slate-200"
              >
                <div
                  className={`relative h-[220px] md:h-auto md:min-h-[260px] order-1 ${
                    imageOnRight ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} — Appliance Fix VA technicians in Arlington, Virginia`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`p-7 md:p-9 flex flex-col justify-center order-2 ${
                    imageOnRight ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="w-11 h-11 bg-blue rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">{item.title}</h3>
                  <p className="text-[14px] text-slate-500 leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <a
            href="#order"
            className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
          >
            I Want to Order Service Now
          </a>
        </div>
      </div>
    </section>
  );
}
