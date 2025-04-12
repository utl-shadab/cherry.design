"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 5),
      wheelMultiplier: 1.1,
      touchMultiplier: 2.5,
      smoothWheel: true,
      syncTouch: true,
      infinite: false,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      window.requestAnimationFrame(raf);
    };

    window.requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null; // No UI, just functionality
};

export default SmoothScroll;
