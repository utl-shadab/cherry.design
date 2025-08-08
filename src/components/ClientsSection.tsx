"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clientLogos, Logo } from "@/data/ServiceData";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (marqueeRef.current && containerRef.current) {
      const marqueeWidth = marqueeRef.current.scrollWidth;
      
      gsap.set(marqueeRef.current, { x: 0 });
      tweenRef.current = gsap.to(marqueeRef.current, {
        x: `-${marqueeWidth / 2}px`,
        duration: 20,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(marqueeRef.current, { x: 0 });
        }
      });
    }

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-black"></span> Our Recent Clients
          </h2>
        </div>
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex w-max space-x-8" ref={marqueeRef}>
            {[...clientLogos, ...clientLogos].map((logo: Logo, index) => (
              <div key={index} className="client-logo flex items-center justify-center">
                <Image
                  src={logo.src}
                 width={400}
                  height={400}
                  alt={logo.name}
                  className="h-12 opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;