"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";
import FloatingCherry from "./FloatingCherry";

const ContactSection = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <section className="bg-[#C1141D] text-white py-20 px-6 md:px-12 lg:px-24">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto">
                <div className="relative border-t-4 border-white pt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-[#F8E9E1] text-[#C1141D] font-bold text-3xl md:text-8xl lg:text-9xl py-10 px-6 md:px-10 flex justify-between items-center"
                    >
                        CONTACT US
                        <button className="border-2 border-[#C1141D] rounded-full p-4 hover:bg-[#C1141D] hover:text-white transition"
                            onClick={() => window.location.href = '/contact'}
                        >
                            <Plus size={30} />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div>
                    <p className="font-semibold">Cherry.design Studio</p>
                    <Link href="tel:+919756188580" className="text-gray-300 hover:underline">
                        +91 97561 88580
                    </Link>
                </div>
                <div>
                    <p className="font-semibold">Start a Project</p>
                    <Link href="mailto:shadab28696@gmail.com" className="text-gray-300 hover:underline">
                        shadab28696@gmail.com
                    </Link>
                </div>
                <div>
                    <p className="font-semibold">N 28° 36' 50" E77° 13' 55"</p>
                    <p className="text-gray-300">Connaught Place, New Delhi - India</p>
                </div>
            </div>

            {/* Links Section */}
            <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between text-sm text-gray-300 border-t border-gray-500 pt-4">
                <div>
                    <Link href="https://www.instagram.com/ibne_afsar/" target="_blank">
                        <span className="mr-4 hover:text-white cursor-pointer">INSTAGRAM</span>
                    </Link>

                    <Link href="https://x.com/Shadabch123" target="_blank">
                        <span className="mr-4 hover:text-white cursor-pointer">TWITTER</span>
                    </Link>

                    <Link href="https://www.linkedin.com/in/shadab--choudhary/" target="_blank">
                        <span className="hover:text-white cursor-pointer">LINKEDIN</span>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href="/">
                        <span className="hover:text-white cursor-pointer">INDEX</span>
                    </Link>

                    <Link href="/works">
                        <span className="hover:text-white cursor-pointer">WORKS</span>
                    </Link>

                    <span onClick={scrollToTop} className="hover:text-white cursor-pointer">
                        TOP
                    </span>
                </div>
            </div>
            <div className="relative z-50">
          <FloatingCherry />
        </div>
        </section>
    );
};

export default ContactSection;
