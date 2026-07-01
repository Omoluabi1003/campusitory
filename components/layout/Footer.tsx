import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">{siteConfig.description}</p>
          <p className="mt-4 text-sm font-semibold text-white/80">Designed and Developed by {siteConfig.architect.company}</p>
          <p className="mt-1 text-xs text-white/55">Platform Architecture by {siteConfig.architect.lead}, Project Architect & Lead Developer</p>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-end">
          {siteConfig.navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
