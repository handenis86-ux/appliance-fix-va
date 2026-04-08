import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Appliance Repair Blog & Resources | Arlington, VA",
  description:
    "Expert appliance repair tips and guides for Arlington, VA homeowners. Fridge, oven, washer, dryer, dishwasher articles. Call (838) 201-3789 for service.",
  keywords: [
    "appliance repair blog Arlington VA",
    "appliance repair tips Arlington",
    "refrigerator troubleshooting",
    "washer repair guide",
    "dryer maintenance tips",
    "oven repair guide",
    "dishwasher tips",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Appliance Repair Blog & Resources | Appliance Fix VA",
    description:
      "Expert appliance repair tips and guides from Appliance Fix VA in Arlington, Virginia.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Appliance Fix VA blog and resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair Blog & Resources | Appliance Fix VA",
    description:
      "Expert appliance repair tips and guides for Arlington, VA homeowners.",
    images: ["/hero.jpg"],
  },
};

const categories = [
  {
    slug: "refrigerator",
    title: "Refrigerator",
    count: 12,
    description: "Cooling problems, ice maker issues, leaks and energy efficiency tips for fridges of all brands.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="10" y1="6" x2="10" y2="6.01"/><line x1="10" y1="14" x2="10" y2="14.01"/></svg>
    ),
  },
  {
    slug: "oven",
    title: "Oven & Stove",
    count: 9,
    description: "Heating problems, igniter failures, control board issues and safe cooking troubleshooting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-4 4-6 8-6 12a6 6 0 0 0 12 0c0-4-2-8-6-12z"/></svg>
    ),
  },
  {
    slug: "washer",
    title: "Washer",
    count: 8,
    description: "Spin cycle failures, drainage problems, vibration and front-load vs top-load comparisons.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="18" height="20" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="7" cy="5" r=".8" fill="currentColor"/></svg>
    ),
  },
  {
    slug: "dryer",
    title: "Dryer",
    count: 7,
    description: "No heat, takes forever to dry, strange noises and dryer vent maintenance for fire safety.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="8" cy="6" r="2" fill="#fff"/><circle cx="16" cy="12" r="2" fill="#fff"/><circle cx="10" cy="18" r="2" fill="#fff"/></svg>
    ),
  },
  {
    slug: "dishwasher",
    title: "Dishwasher",
    count: 10,
    description: "Drainage issues, dishes not cleaning, smelly dishwashers and proper loading techniques.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z"/></svg>
    ),
  },
  {
    slug: "tips",
    title: "Tips & Guides",
    count: 14,
    description: "Repair vs replace decisions, maintenance schedules, energy savings and appliance lifespan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 3 7h8c1-2 3-4 3-7a7 7 0 0 0-7-7z"/></svg>
    ),
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-navy py-16 md:py-20 text-center">
        <div className="max-w-[1160px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Blog &amp; Resources
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-[640px] mx-auto">
            Browse our articles by category — expert tips, troubleshooting guides and maintenance advice for every appliance in your home.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[.12em] text-blue mb-2.5">
              Categories
            </span>
            <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900 mb-2.5">
              Browse Articles by Appliance
            </h2>
            <p className="text-[15px] text-slate-500 max-w-[520px] mx-auto">
              Pick a category below to read all related articles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/${cat.slug}`}
                className="group bg-white border border-slate-200 rounded-xl p-7 hover:border-blue hover:shadow-[0_4px_20px_rgba(37,99,235,.08)] transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-light text-blue flex items-center justify-center mb-4 group-hover:bg-blue group-hover:text-white transition-colors">
                  <div className="w-6 h-6">{cat.icon}</div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                  <span className="text-xs font-semibold text-blue bg-blue-light px-2 py-0.5 rounded-full">
                    {cat.count} articles
                  </span>
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-4 flex-1">
                  {cat.description}
                </p>
                <span className="text-sm font-semibold text-blue inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Articles
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
