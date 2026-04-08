import Link from "next/link";
import { getBlog, getHome, getSite, SERVICE_SLUGS, REDIS_ENABLED } from "@/lib/content";
import SeedButton from "@/components/admin/SeedButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [site, home, blog] = await Promise.all([
    getSite(),
    getHome(),
    getBlog(),
  ]);

  const stats = [
    { label: "Pages", value: 4 + SERVICE_SLUGS.length, note: "Editable pages" },
    { label: "Services", value: SERVICE_SLUGS.length, note: "Service pages" },
    { label: "Home sections", value: home.services.items.length, note: "Listed on home" },
    { label: "Blog categories", value: blog.categories.length, note: "Content categories" },
  ];

  const quickLinks: Array<{ href: string; title: string; description: string }> = [
    { href: "/admin/site", title: "Site Settings", description: "Business name, phone, email, hours, areas served." },
    { href: "/admin/home", title: "Home Page", description: "Hero, services list, trust strip, reviews, FAQ." },
    { href: "/admin/services", title: "Services", description: `Edit ${SERVICE_SLUGS.length} service pages.` },
    { href: "/admin/arlington", title: "Arlington", description: "Service area landing page." },
    { href: "/admin/blog", title: "Blog", description: "Category list and descriptions." },
  ];

  return (
    <div className="p-8 max-w-[1160px] mx-auto">
      <div className="mb-8">
        <p className="text-[11px] font-bold uppercase tracking-[.12em] text-blue mb-1.5">
          Dashboard
        </p>
        <h1 className="text-2xl font-extrabold text-slate-900">
          Welcome back, {site.businessName} admin
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage every section of your public site from one place.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-slate-200 rounded-xl p-5"
          >
            <div className="text-3xl font-extrabold text-slate-900">
              {s.value}
            </div>
            <div className="text-[13px] font-semibold text-slate-700 mt-1">
              {s.label}
            </div>
            <div className="text-[12px] text-slate-400">{s.note}</div>
          </div>
        ))}
      </div>

      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
        Quick links
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-blue hover:shadow-[0_4px_16px_rgba(37,99,235,.08)] transition-all"
          >
            <div className="text-[15px] font-bold text-slate-900 group-hover:text-blue">
              {link.title}
            </div>
            <div className="text-[13px] text-slate-500 mt-1">
              {link.description}
            </div>
            <div className="text-[12px] font-semibold text-blue mt-3">
              Edit &rarr;
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
          Persistence status
        </h2>
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
              REDIS_ENABLED
                ? "bg-green-100 text-green-800"
                : "bg-amber-100 text-amber-800"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                REDIS_ENABLED ? "bg-green-500" : "bg-amber-500"
              }`}
            />
            {REDIS_ENABLED ? "Redis connected" : "Redis not configured"}
          </span>
        </div>
        {REDIS_ENABLED ? (
          <>
            <p className="text-sm text-slate-600 mb-3">
              Content is persisted to Upstash Redis. Save changes from any
              admin page and they will be live immediately. Use the button
              below to one-time seed Redis with the current JSON files.
            </p>
            <SeedButton />
          </>
        ) : (
          <p className="text-sm text-slate-600">
            Redis is not configured. Saves only persist to the local filesystem
            (works in <code>npm run dev</code>). For production, set{" "}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">KV_REST_API_URL</code>{" "}
            and{" "}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">KV_REST_API_TOKEN</code>{" "}
            in Vercel and redeploy.
          </p>
        )}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
          Recent activity
        </h2>
        <ul className="text-sm text-slate-700 space-y-2">
          <li className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span>Home page updated</span>
            <span className="text-xs text-slate-400">today</span>
          </li>
          <li className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span>Refrigerator service page</span>
            <span className="text-xs text-slate-400">yesterday</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Site settings</span>
            <span className="text-xs text-slate-400">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
