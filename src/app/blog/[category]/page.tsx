import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, BUSINESS_NAME } from "@/lib/seo";
import { articles } from "./articles";

interface CategoryInfo {
  title: string;
  description: string;
}

const categoryInfo: Record<string, CategoryInfo> = {
  refrigerator: {
    title: "Refrigerator",
    description:
      "Cooling problems, ice maker issues, leaks and energy efficiency tips for fridges of all brands.",
  },
  oven: {
    title: "Oven & Stove",
    description:
      "Heating problems, igniter failures, control board issues and safe cooking troubleshooting.",
  },
  washer: {
    title: "Washer",
    description:
      "Spin cycle failures, drainage problems, vibration and front-load vs top-load comparisons.",
  },
  dryer: {
    title: "Dryer",
    description:
      "No heat, takes forever to dry, strange noises and dryer vent maintenance for fire safety.",
  },
  dishwasher: {
    title: "Dishwasher",
    description:
      "Drainage issues, dishes not cleaning, smelly dishwashers and proper loading techniques.",
  },
  tips: {
    title: "Tips & Guides",
    description:
      "Repair vs replace decisions, maintenance schedules, energy savings and appliance lifespan.",
  },
};

export async function generateStaticParams() {
  return Object.keys(categoryInfo).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const info = categoryInfo[category];
  if (!info) {
    return {
      title: "Category Not Found",
      robots: { index: false, follow: false },
    };
  }
  const title = `${info.title} Repair Articles | Arlington, VA Blog`;
  const description = `${info.description} Read expert ${info.title.toLowerCase()} repair articles from Appliance Fix VA. Call (838) 201-3789.`;
  const canonical = `/blog/${category}`;
  return {
    title,
    description:
      description.length > 160 ? description.slice(0, 157) + "..." : description,
    keywords: [
      `${info.title.toLowerCase()} repair Arlington VA`,
      `${info.title.toLowerCase()} troubleshooting`,
      `${info.title.toLowerCase()} maintenance tips`,
      "appliance repair blog Arlington",
    ],
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description: info.description,
      images: [
        {
          url: "/hero.jpg",
          width: 1200,
          height: 630,
          alt: `${info.title} repair articles — Appliance Fix VA`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: info.description,
      images: ["/hero.jpg"],
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const info = categoryInfo[category];

  if (!info) notFound();

  const categoryArticles = Object.values(articles[category] ?? {});

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog/${category}#blog`,
    name: `${info.title} Articles`,
    description: info.description,
    url: `${SITE_URL}/blog/${category}`,
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    about: info.title,
    blogPost: categoryArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.publishedAt,
      url: `${SITE_URL}/blog/${category}/${article.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${info.title} Articles`,
        item: `${SITE_URL}/blog/${category}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbSchema]} />
      <Header />

      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white mb-4 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to all categories
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              {info.title} Articles
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-[640px] mx-auto">
              {info.description}
            </p>
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="space-y-4">
            {categoryArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${category}/${article.slug}`}
                className="block border border-slate-200 rounded-xl p-6 hover:border-blue hover:shadow-[0_4px_20px_rgba(37,99,235,.06)] transition-all group"
              >
                <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <time dateTime={article.publishedAt}>
                    {formatDate(article.publishedAt)}
                  </time>
                  <span aria-hidden="true">•</span>
                  <span>{article.readMinutes} min read</span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:gap-2 transition-all">
                  Read article
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
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
