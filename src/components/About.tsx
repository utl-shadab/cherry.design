"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Values from "./Values";
import WhyChoose from "./WhyChoose";
import Link from "next/link";

const About = () => {
  return (
    <div className="relative bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold">Our Passion.</h2>
          <p className="text-lg font-semibold text-gray-300">
            <span className="text-white">Rutland</span> is referred to as{" "}
            <span className="font-bold">Roteland in the Domesday Book</span>. The name means{" "}
            <span className="italic">'land belonging to Rôta'</span>.
          </p>
          <p className="text-gray-400">
            In the digital age, having a strong online presence is crucial for businesses to
            effectively tell their stories and connect with their target audience. Our web design
            services focus on branding, design, and development to help businesses stand out in the
            digital landscape.
          </p>
          <p className="text-gray-400">
            We specialize in creating custom web solutions that align with the unique goals and
            values of each client. Whether you're looking to refresh your brand or build a new
            website, our expertise ensures that your business not only thrives but also makes a
            significant impact in your industry.
          </p>

          {/* Contact Button */}
          <Link href={"/contact"} >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-black mt-5 font-semibold rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-200 transition duration-300"
            >
            Contact us <span> <ChevronRight size={18}/></span>
          </motion.button>
            </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/step.webp"
            alt="Our Passion"
            className="w-full h-96 object-contain rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
      <Values />
      <WhyChoose />
    </div>
  );
};

export default About;
