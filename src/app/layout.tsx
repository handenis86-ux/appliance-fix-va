import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Appliance Fix VA — Appliance Repair in Arlington, VA | Same-Day Service",
  description:
    "Professional appliance repair in Arlington, Virginia. Same-day service for refrigerators, ovens, dishwashers and more. Call (838) 201-3789 for a free estimate.",
  openGraph: {
    title: "Appliance Fix VA — Appliance Repair in Arlington, VA",
    description:
      "Professional appliance repair in Arlington, Virginia. Same-day service. Call (838) 201-3789.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-slate-700 bg-white">
        {children}
      </body>
    </html>
  );
}
