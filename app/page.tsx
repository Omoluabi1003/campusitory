import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { features } from "@/data/features";
import { impactMetrics } from "@/lib/constants";

const sections = [
  { id: "directory", label: "Institution Directory" },
  { id: "profiles", label: "Verified Academic Profiles" },
  { id: "campus-room", label: "Campus Room" },
  { id: "opportunities", label: "Scholarships and Opportunities" },
  { id: "research", label: "Research Library" },
  { id: "ai-engine", label: "AI Academic Engine" },
  { id: "multilingual", label: "Multilingual Console" },
  { id: "pricing", label: "Pricing Preview" },
];

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
              Campusify brings students, lecturers, institutions, researchers, and professional bodies into one secure academic ecosystem built for discovery, trust, and global mobility.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/auth" className="rounded-full bg-ink px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-academy">
                Reserve early access
              </Link>
              <a href="#features" className="rounded-full border border-ink/15 bg-white/70 px-7 py-4 text-center text-sm font-semibold text-ink transition hover:border-campus hover:text-campus">
                View MVP modules
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-soft">
            <div className="rounded-[1.5rem] bg-ink p-6 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Campus command center</p>
              <div className="mt-8 space-y-4">
                {sections.slice(0, 5).map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="flex items-center justify-between rounded-2xl bg-white/8 p-4 transition hover:bg-white/14">
                    <span>{section.label}</span>
                    <span className="text-gold">↗</span>
                  </a>
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

        <section id="features" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">MVP foundation</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">A premium shell for the academic network.</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <div id={section.id} key={section.id} className="scroll-mt-28 rounded-3xl border border-white/70 bg-white/70 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Placeholder route</p>
                <h3 className="mt-3 text-lg font-semibold text-ink">{section.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Structured product space ready for the next build phase.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
