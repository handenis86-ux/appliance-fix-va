import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Areas We Serve", href: "/arlington" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#order" },
];

const serviceLinks = [
  { label: "Refrigerator Repair", href: "/refrigerator-repair" },
  { label: "Washer Repair", href: "/washer-repair" },
  { label: "Dryer Repair", href: "/dryer-repair" },
  { label: "Oven & Stove Repair", href: "/oven-repair" },
  { label: "Dishwasher Repair", href: "/dishwasher-repair" },
  { label: "Ice Machine Repair", href: "/ice-machine-repair" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/[.06] pt-12">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 pb-9">
          <div>
            <Link href="/" className="text-[17px] font-extrabold text-white mb-2.5 block">
              Appliance Fix <span className="text-blue">VA</span>
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed">
              Professional appliance repair in Arlington, Virginia. Fast, honest, and affordable service you can trust.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-white/40 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-white/40 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">Contact</h4>
            <ul className="space-y-2 text-[13px] text-white/40">
              <li>
                <a href="tel:+18382013789" className="hover:text-white transition-colors">(838) 201-3789</a>
              </li>
              <li>Arlington, VA</li>
              <li>Open 24/7</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[.06] py-3.5 flex flex-col sm:flex-row justify-between items-center text-xs text-white/30 gap-1 text-center">
          <span>&copy; 2026 Appliance Fix VA. All rights reserved.</span>
          <span className="sm:text-right">Arlington &middot; Alexandria &middot; Fairfax &middot; Woodbridge &middot; Washington D.C.</span>
        </div>
      </div>
    </footer>
  );
}
