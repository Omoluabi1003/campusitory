import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-paper/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Campusify home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-academy text-lg font-bold text-white shadow-soft">C</span>
          <span className="text-lg font-semibold tracking-tight text-ink">{siteConfig.name}</span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href={siteConfig.cta.href} className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-academy">
          {siteConfig.cta.label}
        </Link>
      </nav>
    </header>
  );
}
