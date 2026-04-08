import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://appliance-fix-va.vercel.app";
const SITE_NAME = "Appliance Fix VA";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Appliance Fix VA — Appliance Repair in Arlington, VA | Same-Day Service",
    template: "%s | Appliance Fix VA",
  },
  description:
    "Professional appliance repair in Arlington, Virginia. Same-day service for refrigerators, ovens, dishwashers, washers and dryers. Call (838) 201-3789 for a free estimate.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "appliance repair Arlington VA",
    "appliance repair Arlington Virginia",
    "refrigerator repair Arlington",
    "washer repair Arlington",
    "dryer repair Arlington",
    "oven repair Arlington",
    "stove repair Arlington",
    "dishwasher repair Arlington",
    "ice machine repair Arlington",
    "same day appliance repair",
    "appliance technician Arlington VA",
    "Appliance Fix VA",
  ],
  category: "Home Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Appliance Fix VA — Appliance Repair in Arlington, VA | Same-Day Service",
    description:
      "Professional appliance repair in Arlington, Virginia. Same-day service for refrigerators, ovens, dishwashers and more. Call (838) 201-3789.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Appliance Fix VA technician repairing kitchen appliances in Arlington, Virginia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Fix VA — Appliance Repair in Arlington, VA",
    description:
      "Same-day appliance repair in Arlington, VA. Call (838) 201-3789 for a free estimate.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification-placeholder",
    other: {
      "bing-site-verification": "bing-site-verification-placeholder",
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-slate-700 bg-white pb-[84px] sm:pb-0">
        {children}
      </body>
    </html>
  );
}
