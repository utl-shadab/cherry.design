"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceDetailsData, InnerService } from "@/data/ServiceDetailsData";

const WhatWeDoSection = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const contentRef = useRef<HTMLDivElement>(null);

  const brandingService = ServiceDetailsData.find(
    (service) => service.slug === "branding"
  );

  const innerServices = brandingService?.InnerService || [];

  const handleTabSwitch = (tabId: number) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
        }
      );
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".tab-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2.2,
        stagger: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mb-8 max-w-7xl w-full mx-auto">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-8 h-0.5 bg-black"></span> What we do
        </h2>
      </div>
      <div className="flex flex-col max-w-7xl w-full mx-auto lg:flex-row gap-8">
        <div className="flex flex-col gap-6 lg:w-1/3">
          {innerServices.map((service) => (
            <div
              key={service.id}
              className="tab-item flex items-center gap-4 cursor-pointer group"
              onClick={() => handleTabSwitch(service.id)}
            >
              <span
                className={`text-lg font-semibold ${
                  activeTab === service.id ? "text-[#C1141D]" : "text-gray-400"
                }`}
              >
                {service.id.toString().padStart(2, "0")}
              </span>
              <h3
                className={`text-2xl md:text-5xl font-bold transition-colors duration-300 ${
                  activeTab === service.id
                    ? "text-[#C1141D]"
                    : "text-gray-300 group-hover:text-[#C1141D]"
                }`}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="lg:w-2/3" ref={contentRef}>
          {innerServices.map(
            (service) =>
              activeTab === service.id && (
                <div key={service.id} className="flex flex-col gap-6">
                  <div className="flex flex-wrap gap-5">
                    <span className="*:rounded-full *:border *:border-[#C1141D] *:text-white *:bg-[#C1141D] *:px-3 *:py-0.5 flex flex-wrap gap-2">
                      {service.services.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center space-x-2 w-fit py-1 px-3 cursor-pointer rounded-full group hover:bg-black transition-transform duration-300"
                    >
                      <span className="text-black font-medium group-hover:text-white">
                        Learn More
                      </span>
                      <ArrowRight
                        size={24}
                        className="text-black group-hover:text-white"
                      />
                    </motion.div>
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
