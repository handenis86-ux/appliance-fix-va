import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog & Resources | Appliance Fix VA",
  description:
    "Tips, guides and expert advice on appliance maintenance and repair from Appliance Fix VA in Arlington, Virginia.",
};

const posts = [
  {
    tag: "Refrigerator",
    title: "How to Know When Your Refrigerator Needs Professional Repair",
    description:
      "Strange noises, warm spots, or rising energy bills? Learn the warning signs that mean it's time to call a pro.",
  },
  {
    tag: "Oven",
    title: "5 Common Oven Problems and How to Fix Them",
    description:
      "From uneven heating to a door that won't close, here are the most frequent oven issues and what you can do about them.",
  },
  {
    tag: "Washer",
    title: "Why Your Washing Machine Smells Bad (And How to Fix It)",
    description:
      "A musty washing machine is more common than you think. Discover what causes the odor and how to eliminate it for good.",
  },
  {
    tag: "Dryer",
    title: "Dryer Not Heating? Here's What to Check Before Calling a Technician",
    description:
      "Before you schedule a service call, try these simple troubleshooting steps that could save you time and money.",
  },
  {
    tag: "Dishwasher",
    title: "How to Maintain Your Dishwasher for Long-Lasting Performance",
    description:
      "Regular maintenance keeps your dishwasher running efficiently. Follow these easy tips to extend its lifespan.",
  },
  {
    tag: "Tips",
    title: "When to Repair vs Replace: A Homeowner's Guide",
    description:
      "Not sure whether to fix your old appliance or buy a new one? Use this guide to make the smartest decision for your budget.",
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
          <p className="text-white/50 text-base md:text-lg max-w-[560px] mx-auto">
            Tips, guides and expert advice on appliance maintenance and repair
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <article
                key={post.title}
                className="border border-slate-200 rounded-[10px] bg-white overflow-hidden hover:border-blue hover:shadow transition"
              >
                {/* Image placeholder */}
                <div className="h-[200px] bg-gray-bg" />

                <div className="p-5">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-blue mb-2">
                    {post.tag}
                  </span>
                  <h2 className="text-[15px] font-bold text-slate-900 leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <Link
                    href="#"
                    className="text-sm font-semibold text-blue hover:text-blue-hover transition-colors"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
