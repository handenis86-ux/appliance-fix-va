import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CategoryData {
  title: string;
  description: string;
  articles: { title: string; excerpt: string }[];
}

const categoriesData: Record<string, CategoryData> = {
  refrigerator: {
    title: "Refrigerator",
    description:
      "Cooling problems, ice maker issues, leaks and energy efficiency tips for fridges of all brands.",
    articles: [
      {
        title: "How to Know When Your Refrigerator Needs Professional Repair",
        excerpt:
          "Strange noises, warm spots, or rising energy bills? Learn the warning signs that mean it's time to call a pro.",
      },
      {
        title: "Why Is My Fridge Not Cooling? 7 Common Causes",
        excerpt:
          "From dirty condenser coils to a broken compressor — here's what to check before scheduling repair.",
      },
      {
        title: "Ice Maker Not Working? Troubleshooting Guide",
        excerpt:
          "Step-by-step diagnosis for the most common ice maker problems in modern refrigerators.",
      },
      {
        title: "How Long Should a Refrigerator Last?",
        excerpt:
          "Average lifespan, signs of aging, and when it's smarter to repair vs replace your old fridge.",
      },
      {
        title: "Refrigerator Energy Efficiency Tips",
        excerpt:
          "Simple habits that can lower your energy bill and extend the life of your refrigerator.",
      },
      {
        title: "Strange Noises Coming From Your Fridge — What They Mean",
        excerpt:
          "Buzzing, clicking, humming or rattling? Here's how to diagnose each sound and what to do.",
      },
    ],
  },
  oven: {
    title: "Oven & Stove",
    description:
      "Heating problems, igniter failures, control board issues and safe cooking troubleshooting.",
    articles: [
      {
        title: "5 Common Oven Problems and How to Fix Them",
        excerpt:
          "From uneven heating to a door that won't close — here are the most frequent oven issues and solutions.",
      },
      {
        title: "Why Is My Oven Not Heating Properly?",
        excerpt:
          "Bake element, igniter, thermostat or sensor — diagnose the cause behind cold or uneven heating.",
      },
      {
        title: "Gas Stove Burner Won't Light — What to Do",
        excerpt:
          "Safety tips and step-by-step troubleshooting for gas stoves that refuse to ignite.",
      },
      {
        title: "Self-Cleaning Cycle Not Working? Fix It Yourself",
        excerpt:
          "Common reasons your oven won't enter self-clean mode and how to safely reset it.",
      },
      {
        title: "Electric vs Gas Ovens: Which Is Better?",
        excerpt:
          "Honest comparison of cost, performance, repair frequency and energy efficiency.",
      },
    ],
  },
  washer: {
    title: "Washer",
    description:
      "Spin cycle failures, drainage problems, vibration and front-load vs top-load comparisons.",
    articles: [
      {
        title: "Why Your Washing Machine Smells Bad (And How to Fix It)",
        excerpt:
          "A musty washing machine is more common than you think. Discover what causes the odor and eliminate it.",
      },
      {
        title: "Washer Won't Spin? Most Likely Causes",
        excerpt:
          "Drive belt, motor coupling, lid switch — find out why your washer drum stopped spinning.",
      },
      {
        title: "Front-Load vs Top-Load Washers: Pros and Cons",
        excerpt:
          "Which type is more reliable, more efficient, and easier to repair? We break it down.",
      },
      {
        title: "How to Stop Your Washer From Vibrating",
        excerpt:
          "Loud thumping during spin cycle? Here's how to balance and stabilize your washing machine.",
      },
    ],
  },
  dryer: {
    title: "Dryer",
    description:
      "No heat, takes forever to dry, strange noises and dryer vent maintenance for fire safety.",
    articles: [
      {
        title: "Dryer Not Heating? Here's What to Check Before Calling a Technician",
        excerpt:
          "Try these simple troubleshooting steps that could save you time and money.",
      },
      {
        title: "Why Is My Dryer Taking So Long to Dry Clothes?",
        excerpt:
          "Clogged vents, lint buildup or a failing heating element — find the real cause.",
      },
      {
        title: "How to Clean Your Dryer Vent (And Why It's Critical)",
        excerpt:
          "Lint buildup is the leading cause of dryer fires. Here's how to clean it safely.",
      },
      {
        title: "Dryer Making Loud Noises — What's Wrong?",
        excerpt:
          "Squealing, thumping, grinding — diagnose the noise and decide whether to DIY or call a pro.",
      },
    ],
  },
  dishwasher: {
    title: "Dishwasher",
    description:
      "Drainage issues, dishes not cleaning, smelly dishwashers and proper loading techniques.",
    articles: [
      {
        title: "How to Maintain Your Dishwasher for Long-Lasting Performance",
        excerpt:
          "Regular maintenance keeps your dishwasher running efficiently. Follow these easy tips.",
      },
      {
        title: "Why Won't My Dishwasher Drain?",
        excerpt:
          "Clogged filter, drain hose or pump — here's how to find and fix the problem yourself.",
      },
      {
        title: "Dishes Coming Out Dirty? Fix It Today",
        excerpt:
          "Spray arms, water temperature, detergent type — common reasons your dishwasher isn't cleaning.",
      },
      {
        title: "How to Load a Dishwasher the Right Way",
        excerpt:
          "Stop wasting cycles. Pro tips for loading dishes for cleaner results every time.",
      },
    ],
  },
  tips: {
    title: "Tips & Guides",
    description:
      "Repair vs replace decisions, maintenance schedules, energy savings and appliance lifespan.",
    articles: [
      {
        title: "When to Repair vs Replace: A Homeowner's Guide",
        excerpt:
          "Not sure whether to fix your old appliance or buy a new one? Use this guide to decide.",
      },
      {
        title: "How Much Does Appliance Repair Cost in Arlington, VA?",
        excerpt:
          "Average prices for the most common refrigerator, washer, dryer and oven repairs.",
      },
      {
        title: "Annual Appliance Maintenance Checklist",
        excerpt:
          "12 simple checks you can do yourself to extend the life of every appliance in your home.",
      },
      {
        title: "5 Signs You Need a Professional Technician",
        excerpt:
          "Some problems need an expert. Here are the red flags you shouldn't ignore.",
      },
      {
        title: "How to Choose a Reliable Appliance Repair Company",
        excerpt:
          "Licensing, warranty, reviews and pricing — what to look for before hiring anyone.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(categoriesData).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = categoriesData[category];
  if (!data) return { title: "Category Not Found" };
  return {
    title: `${data.title} Articles | Appliance Fix VA Blog`,
    description: data.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = categoriesData[category];

  if (!data) notFound();

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white mb-4 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to all categories
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              {data.title} Articles
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-[640px] mx-auto">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="space-y-4">
            {data.articles.map((article) => (
              <article
                key={article.title}
                className="border border-slate-200 rounded-xl p-6 hover:border-blue hover:shadow-[0_4px_20px_rgba(37,99,235,.06)] transition-all"
              >
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
