"use client";

import Values from "@/components/Values";
import WhyChoose from "@/components/WhyChoose";
import Passion from "@/components/about/Passion";

const About = () => {
  return (
    <div className="relative bg-black text-white py-16 px-6 md:px-12">
      <Passion />
      <Values />
      <WhyChoose />
    </div>
  );
};

export default About;
