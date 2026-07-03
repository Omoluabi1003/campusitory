import type { Metadata } from "next";
import { SiteBackdrop } from "@/components/ui/SiteBackdrop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campusitory | Knowledge in Motion",
  description:
    "Campusitory connects global academic communities through institutions, virtual lectures, research access, opportunities, intelligent discovery, and multilingual learning.",
  applicationName: "Campusitory",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Campusitory | Knowledge in Motion",
    description:
      "A global academic platform for institutions, lectures, research, opportunities, and intelligent discovery.",
    type: "website",
    siteName: "Campusitory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campusitory | Knowledge in Motion",
    description:
      "A global academic platform for institutions, lectures, research, opportunities, and intelligent discovery.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteBackdrop />
        {children}
      </body>
    </html>
  );
}
