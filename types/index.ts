import type { InstitutionType, VerificationStatus } from "./domain";
export * from "./domain";

export type FeatureCategory =
  | "directory"
  | "identity"
  | "community"
  | "opportunity"
  | "research"
  | "ai"
  | "language"
  | "pricing";

export interface Feature {
  title: string;
  description: string;
  category: FeatureCategory;
  href: string;
  eyebrow: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface PlatformModule {
  id: number;
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  signal: string;
  campusLayer: string[];
  trustLayer: string[];
  pathway: string[];
}

export interface SourceRegistryEntry {
  source: string;
  verificationStatus: VerificationStatus;
  lastUpdated: string;
  country: string;
  institutionType: InstitutionType;
  license: string;
  confidence: "low" | "medium" | "high";
}
