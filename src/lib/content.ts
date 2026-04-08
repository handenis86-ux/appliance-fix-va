// This module uses Node fs APIs and must only be imported from Server
// Components, Route Handlers, or Server Actions. Do not import from Client
// Components. (We avoid `import "server-only"` since the package is not
// listed as a direct dependency of this project.)

import { readFile } from "node:fs/promises";
import path from "node:path";

// ============================================================================
// Types
// ============================================================================

export interface Site {
  businessName: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  hours: string;
  tagline: string;
  social: {
    facebook: string;
    instagram: string;
    google: string;
  };
  areasServed: string[];
}

export interface HomeHero {
  title: string;
  subtitle: string;
  image: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export interface HomeServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface HomeWhyItem {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

export interface Review {
  text: string;
  author: string;
  location: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TrustedNameStep {
  title: string;
  description: string;
}

export interface TrustedNameSection {
  title: string;
  intro: string;
  steps: TrustedNameStep[];
  outro: string;
}

export interface Home {
  hero: HomeHero;
  trustStrip: string[];
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: HomeServiceItem[];
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    items: HomeWhyItem[];
  };
  reviews: {
    title: string;
    subtitle: string;
    items: Review[];
  };
  stats: {
    headline: string;
    headlineLabel: string;
    items: StatItem[];
    ctaTitle: string;
    ctaLabel: string;
    ctaHref: string;
  };
  brands: {
    title: string;
    subtitle: string;
    description: string;
    items: string[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  trustedName: TrustedNameSection;
}

export interface ServiceHero {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export interface ServiceFeatureItem {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  hero: ServiceHero;
  whatWeFix: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
  };
  problems: string[];
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceFeatureItem[];
  };
  types: string[];
  parts: string[];
  brandsSection: {
    title: string;
    subtitle: string;
    description: string;
  };
  brands: string[];
  faq: {
    title: string;
    items: FaqItem[];
  };
  trustedName: TrustedNameSection;
}

export interface Arlington {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  servicesSection: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string; href: string }>;
  };
  areasSection: {
    title: string;
    description: string;
    image: string;
    areas: string[];
  };
  trustStats: {
    title: string;
    items: StatItem[];
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
}

export interface BlogCategory {
  slug: string;
  title: string;
  count: number;
  description: string;
}

export interface Blog {
  hero: {
    title: string;
    subtitle: string;
  };
  categoriesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  categories: BlogCategory[];
}

// ============================================================================
// Constants
// ============================================================================

export const CONTENT_DIR = path.join(process.cwd(), "content");

export const SERVICE_SLUGS = [
  "refrigerator",
  "washer",
  "dryer",
  "oven",
  "dishwasher",
  "ice-machine",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

// ============================================================================
// Readers
// ============================================================================

async function readJson<T>(relativePath: string): Promise<T> {
  const filePath = path.join(CONTENT_DIR, relativePath);
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function getSite(): Promise<Site> {
  return readJson<Site>("site.json");
}

export function getHome(): Promise<Home> {
  return readJson<Home>("home.json");
}

export function getService(slug: string): Promise<Service> {
  return readJson<Service>(`services/${slug}.json`);
}

export async function getAllServices(): Promise<Service[]> {
  return Promise.all(SERVICE_SLUGS.map((slug) => getService(slug)));
}

export function getArlington(): Promise<Arlington> {
  return readJson<Arlington>("arlington.json");
}

export function getBlog(): Promise<Blog> {
  return readJson<Blog>("blog.json");
}

// ============================================================================
// Content type registry — maps the type key used in the save API route
// to the corresponding JSON file path (relative to CONTENT_DIR).
// ============================================================================

export const CONTENT_FILE_MAP: Record<string, string> = {
  site: "site.json",
  home: "home.json",
  arlington: "arlington.json",
  blog: "blog.json",
  "service-refrigerator": "services/refrigerator.json",
  "service-washer": "services/washer.json",
  "service-dryer": "services/dryer.json",
  "service-oven": "services/oven.json",
  "service-dishwasher": "services/dishwasher.json",
  "service-ice-machine": "services/ice-machine.json",
};
