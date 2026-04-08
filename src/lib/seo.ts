export const SITE_URL = "https://appliance-fix-va.vercel.app";
export const BUSINESS_NAME = "Appliance Fix VA";
export const BUSINESS_PHONE = "+1-838-201-3789";
export const BUSINESS_PHONE_DISPLAY = "(838) 201-3789";

export const AREA_SERVED = [
  "Arlington",
  "Alexandria",
  "Fairfax",
  "Woodbridge",
  "Washington DC",
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: BUSINESS_NAME,
  image: `${SITE_URL}/hero.jpg`,
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  priceRange: "$$",
  description:
    "Professional same-day appliance repair in Arlington, Virginia. Certified technicians for refrigerators, ovens, dishwashers, washers, dryers and ice machines.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Arlington",
    addressLocality: "Arlington",
    addressRegion: "VA",
    postalCode: "22201",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.8799697,
    longitude: -77.1067698,
  },
  areaServed: AREA_SERVED.map((name) => ({
    "@type": "City",
    name,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "350",
  },
  sameAs: [
    "https://www.facebook.com/appliancefixva",
    "https://www.instagram.com/appliancefixva",
    "https://www.yelp.com/biz/appliance-fix-va",
    "https://www.google.com/maps/place/appliance-fix-va",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/hero.jpg`,
  telephone: BUSINESS_PHONE,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS_PHONE,
    contactType: "customer service",
    areaServed: "US-VA",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.facebook.com/appliancefixva",
    "https://www.instagram.com/appliancefixva",
    "https://www.yelp.com/biz/appliance-fix-va",
  ],
};

export function buildServiceSchema(params: {
  serviceType: string;
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    serviceType: params.serviceType,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: BUSINESS_PHONE,
      serviceUrl: `${SITE_URL}${params.path}`,
    },
  };
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
