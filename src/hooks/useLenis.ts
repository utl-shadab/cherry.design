"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // Increased for a more gradual feel
      easing: (t: number) => 1 - Math.pow(1 - t, 5), // A smoother ease-out curve
      wheelMultiplier: 0.6, // Lowered for a softer effect
      touchMultiplier: 1.5, // Balanced for touch interactions
      smoothWheel: true,
      syncTouch: true,
      infinite: false,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      if (typeof window !== "undefined") {
        requestAnimationFrame(raf);
      }
    };

    if (typeof window !== "undefined") {
      requestAnimationFrame(raf);
    }

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
