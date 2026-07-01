import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { features } from "@/data/features";
import { platformModules } from "@/data/platform";
import { impactMetrics, siteConfig } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-campus/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-campus">
              Global academic infrastructure
            </p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Verified learning, research, and opportunity networks for every campus.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Campusify is moving beyond a one-page landing shell into a route-based academic platform represented by {siteConfig.architect.company}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/dashboard" className="rounded-full bg-ink px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-academy">
                Open platform dashboard
              </Link>
              <Link href="/directory" className="rounded-full border border-ink/15 bg-white/70 px-7 py-4 text-center text-sm font-semibold text-ink transition hover:border-campus hover:text-campus">
                Explore institution directory
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-soft">
            <div className="rounded-[1.5rem] bg-ink p-6 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Campus command center</p>
              <div className="mt-8 space-y-4">
                {platformModules.slice(0, 5).map((module) => (
                  <Link key={module.slug} href={`/${module.slug}`} className="flex items-center justify-between rounded-2xl bg-white/8 p-4 transition hover:bg-white/14">
                    <span>{module.title}</span>
                    <span className="text-gold">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-12 sm:px-6 md:grid-cols-3 lg:px-8">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/70 bg-white/70 p-6">
              <p className="text-3xl font-bold text-academy">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">Platform modules</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">A connected academic system with dedicated product surfaces.</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
