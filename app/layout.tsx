import type { Metadata } from "next";
import { SiteBackdrop } from "@/components/ui/SiteBackdrop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campusitory | Knowledge in Motion",
  description:
    "Campusitory connects global academic communities through institutions, virtual lectures, research access, opportunities, intelligent discovery, and multilingual learning.",
  applicationName: "Campusitory",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon", sizes: "512x512", type: "image/png" },
      { url: "/site-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/site-icon.svg",
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Campusitory | Knowledge in Motion",
    description:
      "A global academic platform for institutions, lectures, research, opportunities, and intelligent discovery.",
    type: "website",
    siteName: "Campusitory",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Campusitory Knowledge in Motion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campusitory | Knowledge in Motion",
    description:
      "A global academic platform for institutions, lectures, research, opportunities, and intelligent discovery.",
    images: ["/twitter-image"],
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
