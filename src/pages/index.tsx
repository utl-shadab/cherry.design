import { Metadata } from "next";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Work from "@/components/Work";
import WhatWeDo from "@/components/WhatWeDo";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import ConsultationSection from "@/components/ConsultationSection";
import ContactSection from "@/components/ContactSection";
import WorkDetailsWithScrollZoom from "@/components/WorkDetailsWithScrollZoom";
import Services from "@/components/Services";
import WorkShowcase from "@/components/WorkShowcase";
import SmoothScrolling from "@/components/SmoothScrolling";
export const metadata: Metadata = {
  title: "Cherry.design - Home",
  description: "Welcome to Cherry.design - We design. We develop.",
};

export default function Home() {
  return (
    <div className="font-poppins ">
      <SmoothScrolling>
      <Navbar />
      <Hero />
     <WorkShowcase />
      <Services/>
      <WhatWeDo />
      <About />
      <Testimonial />
      <FAQ />
      <WorkDetailsWithScrollZoom />
      <ConsultationSection />
      <ContactSection />
      </SmoothScrolling>
    </div>
  );
}
