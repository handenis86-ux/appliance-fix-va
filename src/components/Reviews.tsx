import type { Review } from "@/lib/content";

interface ReviewsData {
  title: string;
  subtitle: string;
  items: Review[];
}

interface ReviewsProps {
  data?: ReviewsData;
}

const defaultData: ReviewsData = {
  title: "Real Stories From Our Customers In Arlington",
  subtitle: "Fast and Reliable Appliance Repairs backed by real local reviews",
  items: [
    { text: "Called about my fridge not cooling on a Sunday morning. Technician showed up by noon, found the issue fast, and had it running perfectly within an hour. Great communication the whole time.", author: "Michael R.", location: "Arlington, VA" },
    { text: "Our oven stopped heating right before a dinner party. They came same-day, diagnosed a faulty igniter, replaced it on the spot. Very professional and reasonably priced.", author: "Jennifer L.", location: "Crystal City, VA" },
    { text: "Washer was leaking everywhere. The tech was knowledgeable, explained everything clearly, and fixed it quickly. No hidden charges. Will definitely use again.", author: "David K.", location: "Ballston, VA" },
    { text: "Efficient, friendly, and on time. Fixed my dishwasher drainage problem in under 40 minutes. The technician even gave me tips on maintenance. Highly recommend.", author: "Sarah T.", location: "Fort Myer, VA" },
    { text: "My dryer wasn't heating at all. The repair guy was prompt, diagnosed the problem right away, and had a replacement part on his truck. Done in one visit. A+++ service!", author: "Robert P.", location: "Potomac Yard, VA" },
    { text: "Excellent experience from start to finish. Scheduled online, got a call back within 10 minutes, and the tech arrived the next morning. Ice maker works perfectly now.", author: "Lisa M.", location: "Arlington County, VA" },
  ],
};

export default function Reviews({ data = defaultData }: ReviewsProps) {
  return (
    <section className="py-14 bg-gray-bg">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-2.5">
            {data.title}
          </h2>
          <p className="text-[15px] text-slate-500 max-w-[520px] mx-auto">
            {data.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {data.items.map((r, i) => (
            <div key={`${r.author}-${i}`} className="bg-white rounded-[10px] p-5 border border-slate-200">
              <p className="text-[13px] text-slate-700 leading-relaxed mb-3">{r.text}</p>
              <div className="flex items-center gap-2">
                <strong className="text-[13px] text-slate-900">{r.author}</strong>
                <span className="text-amber-400 text-[13px] tracking-wider">★★★★★</span>
              </div>
              <span className="text-[11px] text-slate-400">{r.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
