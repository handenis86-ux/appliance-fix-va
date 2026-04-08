import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import Services from "@/components/Services";
import OrderForm from "@/components/OrderForm";
import RepairServices from "@/components/RepairServices";
import NeedRepairCta from "@/components/NeedRepairCta";
import ProfessionalRepair from "@/components/ProfessionalRepair";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import BrandsFull from "@/components/BrandsFull";
import TrustedName from "@/components/TrustedName";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Appliance Repair Arlington, VA | Same-Day Service | Appliance Fix VA",
  description:
    "Same-day appliance repair in Arlington, VA. Fridges, ovens, washers, dryers, dishwashers. Certified techs, all brands. Call (838) 201-3789 for a free estimate.",
  keywords: [
    "appliance repair Arlington VA",
    "same day appliance repair Arlington",
    "refrigerator repair Arlington",
    "washer repair Arlington",
    "dryer repair Arlington",
    "oven repair Arlington",
    "dishwasher repair Arlington",
    "appliance technician Arlington Virginia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Appliance Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day appliance repair in Arlington, Virginia. Call (838) 201-3789 for a free estimate.",
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
    title: "Appliance Repair in Arlington, VA | Appliance Fix VA",
    description:
      "Same-day appliance repair in Arlington, VA. Call (838) 201-3789.",
    images: ["/hero.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, organizationSchema]} />
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueStrip />
        <Services />
        <OrderForm />
        <RepairServices />
        <NeedRepairCta />
        <ProfessionalRepair />
        <FAQ />
        <WhyChooseUs />
        <Reviews />
        <Stats />
        <BrandsFull />
        <TrustedName />
        <CtaBanner />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
