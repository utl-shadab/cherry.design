import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TestimonialProps {
  name: string;
  company: string;
  text: string;
  initial: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: 'Suzie Steel',
    company: 'The Plough',
    text: 'Our website smashes our competitors websites out the park. We\'ve had lots of comments about how good it is, how easy it is to navigate through and how beautiful it is. Benefits of working with Shape are that they really engross themselves in your brand & put that across in your website.',
    initial: 'S',
  },
  {
    name: 'Rachel Bates',
    company: 'Rachel Bates',
    text: 'If I went back in time I would definitely work with Shape again. Our website would stand up as being totally unique against all our competitors. Shape are so hip & so different and their approach is so fresh. Andy really goes above and beyond with everything you ask him to do.',
    initial: 'R',
  },
  {
    name: 'Nick Johnson',
    company: 'Silver Design',
    text: 'I don\'t think I\'ve ever saw the craftmanship and dedication to a local business like this company. Their designs are incredible.',
    initial: 'N',
  },
  {
    name: 'Nick Johnson',
    company: 'Silver Design',
    text: 'I don\'t think I\'ve ever saw the craftmanship and dedication to a local business like this company. Their designs are incredible.',
    initial: 'N',
  },
  {
    name: 'Nick Johnson',
    company: 'Silver Design',
    text: 'I don\'t think I\'ve ever saw the craftmanship and dedication to a local business like this company. Their designs are incredible.',
    initial: 'N',
  },
];

// Variants for the "Show more/less" button animation
const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 10, mass: 0.4 },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { type: 'spring', stiffness: 120, damping: 10, mass: 0.4 },
  },
};

// Variants for the initial letter (avatar) animation
const avatarVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: 'spring', stiffness: 200, damping: 12, mass: 0.6 },
  },
};

// Variants for the name and company text animation
const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 150, damping: 12, mass: 0.5 },
  },
};

const TestimonialItem: React.FC<TestimonialProps> = ({ name, company, text, initial }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const controls = useAnimation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);

  // Check if the text overflows (more than 2 lines)
  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
      const maxHeight = lineHeight * 2; // 2 lines
      setIsTextOverflowing(textRef.current.scrollHeight > maxHeight);
    }

    // GSAP animation for the card entrance
    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }

    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.div
      ref={itemRef}
      className="bg-gray-50 rounded-lg p-8 min-h-[206px] flex flex-col justify-between"
      whileHover={{
        borderColor: '#C41E3A',
        borderWidth: '2px',
        borderStyle: 'solid',
        transition: { type: 'spring', stiffness: 180, damping: 14, mass: 0.6 },
      }}
      initial={{
        borderColor: 'transparent',
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 130, damping: 11, mass: 0.5 }}
        className="relative"
      >
        <motion.p
          ref={textRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', stiffness: 160, damping: 13, mass: 0.5 }}
          className={`text-gray-700 mb-2 text-start overflow-hidden transition-all ${
            isExpanded ? 'line-clamp-none' : 'line-clamp-2'
          }`}
        >
          {text}
        </motion.p>

        {/* Show more/less button if text overflows */}
        <AnimatePresence>
          {isTextOverflowing && (
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#C41E3A] flex justify-self-end  text-sm font-medium mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="flex items-center mt-4">
        <motion.div
          variants={avatarVariants}
          initial="rest"
          whileHover="hover"
          className="flex-shrink-0"
        >
          <div className="w-12 h-12 bg-[#C1141D] rounded-lg flex items-center justify-center text-xl font-bold text-white">
            {initial}
          </div>
        </motion.div>
        <div className="ml-4">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-black font-medium"
          >
            {name}
          </motion.p>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-600 text-sm"
          >
            {company}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonial: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector('h1'),
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3">
            <p className="flex items-center text-sm mb-2 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 bg-[#C1141D] rounded-full mr-2"></span>
              Testimonials
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-start font-bold mb-6">
              Why our clients love Craft CMS
            </h1>
          </div>

          <div className="lg:col-span-3">
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                cssMode={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 2 },
                }}
                className="pb-16"
              >
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <TestimonialItem {...testimonial} />
                    </SwiperSlide>
                  ))}
                </AnimatePresence>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;