import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Service data
const services = [
  {
    title: 'Consulting',
    image: "/key.webp",
    description:
      "Soul work and passion often come with being too close to your own work and suffering from what we call the \"spaghetti brain\". That's when we step in – to untangle, structure and provide a clear plan of action, without losing the heart."
  },
  {
    title: 'Branding',
     image: "/branding.webp",
    description: "The most impactful brands are an emotional connection and a place of belonging. We help you clarify and capture that intangible, complex spirit of your business and communicate it to your audience in a way that makes them feel."
  },
  {
    title: 'Design',
     image: "/design.webp",
    description: "From digital to print, our designs go beyond beautiful and functional, they create meaning. The designs we develop bring about new possibilities and are shortcut ways for people to feel engaged, valued and inspired."
  },
  {
    title: 'Websites',
     image: "/website.webp",
    description: "Put your best foot forward digitally with a website crafted by designers and developers that truly get you. With the right strategy, every website and landing page is an opportunity for you to connect with your audience and inspire action."
  },
  {
    title: 'Marketing',
     image: "/marketing.webp",
    description: "Marketing can feel overwhelming with the rapid technological changes. Our approach blends the newest strategies with something much more permanent – the human factor, striking the right balance between building brand equity and driving immediate results."
  },
  {
    title: 'Ecosystems',
     image: "/ecosystem.webp",
    description: "We're geeks who love tools and figuring out how they can work together to symbiotically boost growth. Allow us to craft a bespoke system that lets you expand long-term, without the constant need for upkeep and maintenance."
  }
];
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: {
    scale: 1.05, // Slightly increased scale for more pronounced effect
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    zIndex: 40,
    // borderColor: '#C41E3A',
    borderWidth: '2px',
    borderStyle: 'solid',
    transition: { type: 'spring', stiffness: 250, damping: 15, mass: 0.8 },
  },
  tap: {
    scale: 0.98,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  focus: {
    scale: 1.02,
    // borderColor: '#C41E3A',
    borderWidth: '2px',
    borderStyle: 'solid',
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

// Variants for the "Get in touch" button animation
const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, type: 'spring', stiffness: 150, damping: 12, mass: 0.5 },
  },
  exit: { opacity: 0, y: 10, transition: { type: 'spring', stiffness: 150, damping: 12 } },
};

// Variants for staggered text animation in the expanded card
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
};

// Variants for the icon animation
const iconVariants = {
  rest: { x: 0, y: 0 },
  hover: {
    x: 5,
    y: -5,
    transition: { type: 'spring', stiffness: 180, damping: 14, mass: 0.6 },
  },
};

// Variants for the dot separator animation
const dotVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.5, // Increase size on hover
    transition: { type: 'spring', stiffness: 200, damping: 10 },
  },
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll-triggered animation setup
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, y }}
      className="max-w-7xl mx-auto py-16 px-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 6).map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            whileFocus="focus"
            tabIndex={0}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative bg-white rounded-lg shadow-sm border border-gray-800 cursor-pointer "
            onFocus={() => setHoveredIndex(index)}
            style={{ zIndex: hoveredIndex === index ? 60 : 0 }}
          >
            {/* Default Card (Before Hover) */}
            <div className="p-6 h-40 flex flex-col justify-between">
              <div className="flex justify-between items-start w-full">
                <motion.div
                  variants={iconVariants}
                  initial="rest"
                  animate={hoveredIndex === index ? 'hover' : 'rest'}
                >
                  <Image width={80} height={80} src={service.image} alt={service.title} />
                </motion.div>
                <motion.div
                  variants={dotVariants}
                  initial="rest"
                  animate={hoveredIndex === index ? 'hover' : 'rest'}
                  className="w-4 h-4 bg-black rounded-full"
                />
              </div>
              <div className="flex justify-between items-center w-full mt-4">
                <h3 className="text-xl font-medium">{service.title}</h3>
                {/* <motion.div
                  variants={dotVariants}
                  initial="rest"
                  animate={hoveredIndex === index ? 'hover' : 'rest'}
                  className="w-2 h-2 bg-black rounded-full"
                /> */}
              </div>
            </div>

            {/* Expanded Card (After Hover) */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute top-0 left-0 w-full bg-white rounded-lg z-50 p-6 flex flex-col shadow-lg border border-black"
                  initial={{ opacity: 0, height: '100%', scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: '100%', scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16, mass: 0.7 }}
                >
                  <div className="flex justify-between items-start w-full">
                    <motion.div
                      variants={iconVariants}
                      initial="rest"
                      animate="hover"
                    >
                      <Image width={80} height={80} src={service.image} alt={service.title} />
                    </motion.div>
                    <motion.div
                      variants={dotVariants}
                      initial="rest"
                      animate="hover"
                      className="w-4 h-4 bg-black rounded-full"
                    />
                  </div>
                  <motion.div
                    className="mt-4"
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h3
                      variants={textVariants}
                      className="text-xl font-medium mb-2"
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      variants={textVariants}
                      className="text-gray-700 text-sm mb-6"
                    >
                      {service.description}
                    </motion.p>
                    <AnimatePresence>
                      <motion.button
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-full shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        whileFocus={{ scale: 1.05, boxShadow: '0 0 0 3px rgba(196, 30, 58, 0.3)' }}
                      >
                     <Link href="/contact">Get in touch</Link>
                      </motion.button>
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}