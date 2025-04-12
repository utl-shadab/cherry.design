"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex flex-col justify-center items-center bg-[#c1141d] text-black px-4 md:px-16"
    >


      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl md:text-4xl font-medium mt-20"
      >
        We design. We develop.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl md:text-6xl font-bold text-center mt-4"
      >
        <span className="text-black">We deliver your vision</span> <br />
        <span className="text-black">to the world</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-base md:text-xl text-center mt-4 px-4 md:px-12"
      >
        Explore our work and discover your potential.
      </motion.p>
      <Link href="#work">

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 bg-white text-black font-medium px-6 py-3 rounded-full shadow-lg text-lg hover:bg-gray-100 transition"

        >
          Show me the magic
        </motion.button>
      </Link>
    </section>
  );
};

export default Hero;
