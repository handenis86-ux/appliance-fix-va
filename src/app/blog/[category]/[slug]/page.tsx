import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import { articles, type Article } from "../articles";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const out: { category: string; slug: string }[] = [];
  for (const category of Object.keys(articles)) {
    for (const slug of Object.keys(articles[category])) {
      out.push({ category, slug });
    }
  }
  return out;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = articles[category]?.[slug];
  if (!article) return { title: "Article Not Found | Appliance Fix VA" };

  const url = `https://appliancefixva.com/blog/${category}/${slug}`;
  return {
    title: `${article.title} | Appliance Fix VA Blog`,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      siteName: "Appliance Fix VA",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

// Minimal markdown renderer supporting: `## h2`, `- list`, `**bold**`, paragraphs.
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let idx = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={`${keyPrefix}-b-${idx++}`} className="font-semibold text-slate-900">
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function renderBody(body: string): React.ReactNode {
  const blocks = body.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  const nodes: React.ReactNode[] = [];

  blocks.forEach((block, i) => {
    if (block.startsWith("## ")) {
      const heading = block.replace(/^##\s+/, "");
      nodes.push(
        <h2 key={`h-${i}`} className="text-2xl font-bold mt-10 mb-4 text-slate-900">
          {renderInline(heading, `h-${i}`)}
        </h2>
      );
      return;
    }
    if (block.startsWith("### ")) {
      const heading = block.replace(/^###\s+/, "");
      nodes.push(
        <h3 key={`h3-${i}`} className="text-xl font-bold mt-8 mb-3 text-slate-900">
          {renderInline(heading, `h3-${i}`)}
        </h3>
      );
      return;
    }
    // Bullet list: every line starts with "- "
    const lines = block.split("\n");
    if (lines.every((l) => l.trim().startsWith("- "))) {
      nodes.push(
        <ul
          key={`ul-${i}`}
          className="list-disc pl-6 my-5 space-y-2 text-slate-700 leading-[1.75] text-[16px] marker:text-blue"
        >
          {lines.map((l, j) => (
            <li key={`li-${i}-${j}`}>
              {renderInline(l.replace(/^-\s+/, ""), `li-${i}-${j}`)}
            </li>
          ))}
        </ul>
      );
      return;
    }
    nodes.push(
      <p key={`p-${i}`} className="text-slate-700 leading-[1.75] text-[16px] mb-5">
        {renderInline(block, `p-${i}`)}
      </p>
    );
  });

  return nodes;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { category, slug } = await params;
  const article = articles[category]?.[slug];
  if (!article) notFound();

  const related: Article[] = Object.values(articles[category])
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-gray-bg border-b border-slate-200"
      >
        <div className="max-w-[1160px] mx-auto px-6 py-4">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-slate-500">
            <li>
              <Link href="/" className="hover:text-blue transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-blue transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/blog/${article.category}`}
                className="hover:text-blue transition-colors"
              >
                {article.categoryLabel}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-700 font-medium truncate max-w-[260px] sm:max-w-none">
              {article.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Article hero */}
      <section className="bg-white pt-10 md:pt-14 pb-4">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href={`/blog/${article.category}`}
              className="inline-block text-[11px] font-bold uppercase tracking-[.12em] text-blue bg-blue-light px-3 py-1.5 rounded-full hover:bg-blue hover:text-white transition-colors"
            >
              {article.categoryLabel}
            </Link>
            <span className="text-[13px] text-slate-500">
              {article.readMinutes} min read
            </span>
            <span className="text-slate-300" aria-hidden="true">
              •
            </span>
            <time
              dateTime={article.publishedAt}
              className="text-[13px] text-slate-500"
            >
              {formatDate(article.publishedAt)}
            </time>
          </div>
          <h1 className="text-3xl md:text-[40px] leading-[1.15] font-extrabold text-slate-900 mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white pb-14 md:pb-20">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="border-t border-slate-200 pt-8 mt-6">
            {renderBody(article.body)}
          </div>

          {/* Inline CTA */}
          <div className="mt-12 rounded-xl bg-navy p-8 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Need help with your appliance in Arlington?
            </h3>
            <p className="text-white/70 text-[15px] mb-5 max-w-[520px] mx-auto">
              Our technicians repair every major brand, same day in most cases.
              Call now for a fast diagnostic appointment.
            </p>
            <a
              href="tel:+18382013789"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue hover:bg-blue-hover text-white text-[15px] font-semibold rounded-md transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (838) 201-3789
            </a>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-gray-bg py-14 md:py-20 border-t border-slate-200">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="mb-8">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[.12em] text-blue mb-2">
                Keep Reading
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                More {article.categoryLabel} Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.category}/${r.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-blue hover:shadow-[0_4px_20px_rgba(37,99,235,.08)] transition-all flex flex-col"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[.12em] text-blue mb-2">
                    {r.categoryLabel}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4 flex-1">
                    {r.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {r.readMinutes} min read
                    </span>
                    <span className="text-sm font-semibold text-blue inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <MobileCta />
    </>
  );
}
