"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is custom website design, and why does it matter for your brand?",
    answer:
      "Custom website design ensures your brand stands out by offering a unique user experience, reflecting your identity, and optimizing performance.",
  },
  {
    question: "How can a strong content strategy improve my brand's presence?",
    answer:
      "A strong content strategy helps build brand credibility, improve SEO rankings, and engage customers effectively, leading to higher conversions.",
  },
  {
    question: "What does a brand strategy include?",
    answer:
      "Brand strategy includes positioning, messaging, visual identity, and customer experience planning to create a cohesive and memorable brand.",
  },
  {
    question: "Why should I choose a Cherry.design?",
    answer:
      "Cherry.design provides high-quality, fully customized, and scalable web design solutions with no code limitations.",
  },
  {
    question: "What types of content can Cherry.design create to enhance my brand?",
    answer:
      "Cherry.design offers blog content, website copy, social media content, video production, and branding assets to improve engagement.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#C1141D] text-black py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-black rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <button
              className="w-full flex justify-between items-center text-left px-6 py-4 text-base md:text-2xl font-medium"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
            </button>

            {/* Smooth Expand & Collapse Animation */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="px-6 pb-4 text-black overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.p layout className="py-2">
                    {faq.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
