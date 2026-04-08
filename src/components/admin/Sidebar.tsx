"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SERVICE_SLUGS } from "@/lib/admin-constants";

interface NavItem {
  label: string;
  href: string;
  exact?: boolean;
  children?: NavItem[];
}

const NAV: NavItem[] = [
  { label: "Dashboard", href: "/admin", exact: true },
  { label: "Site Settings", href: "/admin/site" },
  { label: "Home Page", href: "/admin/home" },
  {
    label: "Services",
    href: "/admin/services",
    children: SERVICE_SLUGS.map((slug) => ({
      label: slugLabel(slug),
      href: `/admin/services/${slug}`,
    })),
  },
  { label: "Arlington", href: "/admin/arlington" },
  { label: "Blog", href: "/admin/blog" },
];

function slugLabel(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  function isActive(item: NavItem): boolean {
    if (!pathname) return false;
    if (item.exact) return pathname === item.href;
    return pathname === item.href || pathname.startsWith(item.href + "/");
  }

  return (
    <aside className="w-[240px] shrink-0 bg-navy text-white min-h-screen flex flex-col sticky top-0 self-start">
      <div className="px-5 py-5 border-b border-white/10">
        <Link href="/admin" className="block">
          <div className="text-[15px] font-extrabold">
            Appliance Fix <span className="text-blue">VA</span>
          </div>
          <div className="text-[11px] text-white/40 uppercase tracking-wider mt-0.5">
            Admin Panel
          </div>
        </Link>
      </div>
      <nav className="flex-1 py-3 overflow-y-auto">
        <ul className="space-y-0.5 px-2">
          {NAV.map((item) => {
            const active = isActive(item);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-[13px] font-medium transition-colors ${
                    active
                      ? "bg-blue text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-0.5 ml-3 space-y-0.5 border-l border-white/10 pl-2">
                    {item.children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block px-3 py-1.5 rounded-md text-[12px] transition-colors ${
                              childActive
                                ? "bg-blue/20 text-white"
                                : "text-white/50 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-3 border-t border-white/10">
        <button
          onClick={logout}
          className="w-full px-3 py-2 rounded-md text-[13px] font-medium text-white/60 hover:bg-white/5 hover:text-white text-left transition-colors"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}
