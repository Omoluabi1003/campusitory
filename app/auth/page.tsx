import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function AuthPlaceholderPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 py-20 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">Authentication placeholder</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Early access opens after profile onboarding is scoped.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          This route intentionally avoids authentication implementation while keeping every call to action connected to a real page.
        </p>
        <Link href="/" className="mx-auto mt-8 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-academy">
          Back to homepage
        </Link>
      </main>
    </>
  );
}
