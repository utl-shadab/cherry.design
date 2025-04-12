// pages/services/index.tsx
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import ClientsSection from "@/components/ClientsSection";
import StatsSection from "@/components/StatsSection";
import PartnerSection from "@/components/PartnerSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Services | Cherry.design</title>
        <meta name="description" content="Explore our digital solutions for business success, including websites, apps, video production, and more." />
      </Head>
      <div className="bg-white">
        <Navbar/>
        <HeroSection />
        <Services />
        <ClientsSection />
        <StatsSection />
        <PartnerSection />
        <ContactSection/>
      </div>
    </>
  );
};

export default ServicesPage;