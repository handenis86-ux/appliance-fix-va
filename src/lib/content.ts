// This module uses Node fs APIs + Upstash Redis and must only be imported
// from Server Components, Route Handlers, or Server Actions. Do not import
// from Client Components.

import { readFile } from "node:fs/promises";
import path from "node:path";
import { Redis } from "@upstash/redis";

// ============================================================================
// Redis client (Upstash) — used for production persistence on Vercel.
// Falls back to JSON files if env vars are not set (for local dev).
// ============================================================================

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const redis: Redis | null =
  REDIS_URL && REDIS_TOKEN
    ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN })
    : null;

export const REDIS_ENABLED = redis !== null;

// Key prefix for all content keys, so they're namespaced and easy to inspect.
const KEY_PREFIX = "content:";

function key(name: string) {
  return `${KEY_PREFIX}${name}`;
}

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

async function readJsonFile<T>(relativePath: string): Promise<T> {
  const filePath = path.join(CONTENT_DIR, relativePath);
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

/**
 * Read content. In production with Redis configured, reads from Redis.
 * Falls back to JSON file on disk if Redis is not configured or the key
 * is missing (e.g. before first seed).
 */
async function readContent<T>(name: string, filePath: string): Promise<T> {
  if (redis) {
    try {
      const cached = await redis.get<T>(key(name));
      if (cached) return cached;
    } catch (err) {
      console.error(`[content] Redis read failed for ${name}, falling back to file:`, err);
    }
  }
  return readJsonFile<T>(filePath);
}

/**
 * Write content to Redis (if configured) and to JSON file on disk
 * (if filesystem is writable — works in dev, not on Vercel).
 */
export async function writeContent<T>(
  name: string,
  filePath: string,
  data: T,
): Promise<{ redis: boolean; file: boolean }> {
  let redisOk = false;
  let fileOk = false;

  if (redis) {
    try {
      await redis.set(key(name), data);
      redisOk = true;
    } catch (err) {
      console.error(`[content] Redis write failed for ${name}:`, err);
    }
  }

  // Try to also write to disk (best-effort, ignored on read-only filesystems)
  try {
    const { writeFile, mkdir } = await import("node:fs/promises");
    const fullPath = path.join(CONTENT_DIR, filePath);
    await mkdir(path.dirname(fullPath), { recursive: true });
    await writeFile(fullPath, JSON.stringify(data, null, 2) + "\n", "utf-8");
    fileOk = true;
  } catch (err) {
    // Silently ignore on read-only filesystems
    if (process.env.NODE_ENV !== "production") {
      console.error(`[content] File write failed for ${filePath}:`, err);
    }
  }

  return { redis: redisOk, file: fileOk };
}

export function getSite(): Promise<Site> {
  return readContent<Site>("site", "site.json");
}

export function getHome(): Promise<Home> {
  return readContent<Home>("home", "home.json");
}

export function getService(slug: string): Promise<Service> {
  return readContent<Service>(`service-${slug}`, `services/${slug}.json`);
}

export async function getAllServices(): Promise<Service[]> {
  return Promise.all(SERVICE_SLUGS.map((slug) => getService(slug)));
}

export function getArlington(): Promise<Arlington> {
  return readContent<Arlington>("arlington", "arlington.json");
}

export function getBlog(): Promise<Blog> {
  return readContent<Blog>("blog", "blog.json");
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
