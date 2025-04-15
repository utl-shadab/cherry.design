"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router"; // Import useRouter
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, startProjectLink } from "../data/LinksData"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const router = useRouter(); 

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "-100%" },
        {
          x: "0%",
          duration: 0.5,
          ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        }
      );
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-black text-white px-6 md:px-20 py-4 flex items-center justify-between z-50 shadow-md"
    >
      {/* Logo */}
      <Link href="/" className="text-xl font-semibold">
        🍒 <span className="font-bold">Cherry.design</span>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 text-lg font-medium items-center">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`relative inline-block hover:text-gray-400 transition ${
                router.pathname === link.href
                  ? "text-[#c1141d] font-bold before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#F8E9E1] "
                  : ""
              }`}
            >
              <span className="relative">{link.label}</span>
            </Link>
          </li>
        ))}
        <motion.div
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         <Link href={startProjectLink.href}>
  <motion.button
    transition={{ type: "spring", stiffness: 200, damping: 12 }}
    className="relative inline-block md:flex items-center px-5 py-2 text-lg font-medium text-white hover:text-gray-400 transition-all duration-300"
  >
    <span className="relative">{startProjectLink.label}</span>
    <motion.span
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
      className="ml-3 w-6 h-6 bg-[#c1141d] text-white flex items-center justify-center rounded-full"
    >
      <ArrowRight size={18} />
    </motion.span>
  </motion.button>
</Link>
        </motion.div>
      </ul>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 left-0 h-full w-full bg-black text-white flex flex-col p-6 shadow-lg"
          >
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            <ul className="space-y-6 mt-10 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`relative inline-block hover:text-gray-400 transition ${
                      router.pathname === link.href
                        ? "text-[#c1141d] font-bold before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-white"
                        : ""
                    }`}
                  >
                    <span className="relative">{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={startProjectLink.href}
                  className={`relative inline-block hover:text-gray-400 transition ${
                    router.pathname === startProjectLink.href
                      ? "text-[#c1141d] font-bold before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-white"
                      : ""
                  }`}
                >
                  <span className="relative">{startProjectLink.label}</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;