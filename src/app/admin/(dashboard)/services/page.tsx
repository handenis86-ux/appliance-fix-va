import Link from "next/link";
import { getAllServices, SERVICE_SLUGS } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function ServicesListPage() {
  const services = await getAllServices();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-[1160px] mx-auto px-8 py-4">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-blue">
            Pages
          </p>
          <h1 className="text-lg font-extrabold text-slate-900 leading-tight">
            Services
          </h1>
          <p className="text-[12px] text-slate-500 mt-0.5">
            {SERVICE_SLUGS.length} service pages
          </p>
        </div>
      </header>
      <div className="max-w-[1160px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/admin/services/${service.slug}`}
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-blue hover:shadow-[0_4px_16px_rgba(37,99,235,.08)] transition-all"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue">
                {service.slug}
              </div>
              <div className="text-base font-bold text-slate-900 mt-1 group-hover:text-blue">
                {service.hero.title}
              </div>
              <p className="text-[12px] text-slate-500 mt-2 line-clamp-2">
                {service.hero.subtitle}
              </p>
              <div className="flex items-center gap-4 mt-4 text-[11px] text-slate-400">
                <span>{service.problems.length} problems</span>
                <span>{service.faq.items.length} FAQs</span>
                <span>{service.brands.length} brands</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
