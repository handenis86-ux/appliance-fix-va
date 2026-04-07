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

export default function Home() {
  return (
    <>
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
