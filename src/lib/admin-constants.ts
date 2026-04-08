// Shared constants safe to import from both client and server code.
// Keeping this file free of Node APIs avoids bundling server code into
// client components.

export const SERVICE_SLUGS = [
  "refrigerator",
  "washer",
  "dryer",
  "oven",
  "dishwasher",
  "ice-machine",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const CONTENT_TYPES = [
  "site",
  "home",
  "arlington",
  "blog",
  "service-refrigerator",
  "service-washer",
  "service-dryer",
  "service-oven",
  "service-dishwasher",
  "service-ice-machine",
] as const;

export type ContentType = (typeof CONTENT_TYPES)[number];
