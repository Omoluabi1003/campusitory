import type { Metric } from "@/types";

export const siteConfig = {
  name: "Campusify",
  description:
    "A global academic platform for verified communities, research access, virtual lectures, scholarships, AI study tools, and multilingual learning.",
  architect: {
    company: "ETL GIS Consulting LLC",
    lead: "Paul A. K. Iyogun",
    role: "Project Architect and Development Lead",
    location: "Florida, United States of America",
  } as const,
  navItems: [
    { label: "Blueprint", href: "/blueprint" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Directory", href: "/directory" },
    { label: "Campus Room", href: "/campus-room" },
    { label: "AI Engine", href: "/ai-engine" },
  ],
  cta: { label: "Join waitlist", href: "/auth" },
};

export const impactMetrics: Metric[] = [
  { value: "11", label: "core modules mapped from the original Campusify blueprint" },
  { value: "180+", label: "countries planned for academic discovery" },
  { value: "24/7", label: "global study and collaboration access" },
];
