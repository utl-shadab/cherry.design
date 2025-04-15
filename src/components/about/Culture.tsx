import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Culture: React.FC = () => {
  // Intersection observer hooks for triggering animations
  const [containerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation controls
  const controls = useAnimation();

  // Trigger animations when component comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.99] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="w-full pb-20 lg:pb-24 2xl:pb-32 4xl:pb-40"
    >
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20 3xl:px-40 4xl:px-60">
        <div className="w-full flex lg:justify-between flex-col lg:flex-row">
          {/* Left side with image */}
          <motion.div 
            variants={fadeInUp}
            className="px-2 lg:px-3 xl:px-4 relative w-full mb-10 inline-flex lg:mb-0 lg:w-8/12"
          >
            <div className="w-full relative aspect-square md:aspect-video lg:pb-0 lg:h-full">
              {/* White corner decoration */}
              <div className="bg-white rounded-tl-2xl absolute bottom-0 right-0 z-20 w-32 h-14 lg:rounded-tl-3xl lg:h-20 dark:bg-gray-800">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white fill-current absolute top-px -right-px transform -translate-y-full rotate-180 dark:text-gray-800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                </svg>
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white fill-current absolute -bottom-px left-px transform -translate-x-full rotate-180 dark:text-gray-800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                </svg>
              </div>
              
              {/* Image container */}
              <div className="w-full h-full rounded-2xl transform-gpu overflow-hidden absolute top-0 left-0 bg-gray-50 dark:bg-gray-700 lg:rounded-3xl">
                <img 
                  src="/culture.webp" 
                  alt="Team discussing work in an office with plants"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side with content */}
          <motion.div 
            variants={fadeInUp}
            className="px-2 lg:px-3 xl:px-4 inline-flex items-center w-full lg:min-h-140 lg:justify-center lg:w-8/12 lg:py-20 3xl:min-h-160 4xl:w-7/12"
          >
            <div className="w-full space-y-8 lg:max-w-xl 4xl:max-w-3xl">
              {/* Header section */}
              <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
                <motion.div 
                  variants={fadeInUp}
                  className="inline-flex items-center space-x-2"
                >
                  <div className="bg-gray-600 dark:bg-gray-300 w-1.5 h-1.5 rounded-full"></div>
                  <div className="font-light text-sm lg:text-base text-gray-600 dark:text-gray-300">
                    Our Culture
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-xl md:text-3xl xl:text-4xl 4xl:text-5xl  tracking-tight text-gray-600 dark:text-gray-300 leading-none"
                >
                  We've created an environment where everyone feels comfortable and open, but we can have a laugh along the way
                </motion.h2>
              </div>

              {/* Paragraph */}
              <motion.div 
                variants={fadeInUp}
                className="w-full relative"
              >
                <p className="text-base xl:text-lg text-gray-600 dark:text-gray-400  relative z-10 font-light leading-7 mb-6">
                  We produce good work for good people, and with the idea that staff and the client will be happy throughout the full process. This in return will bring more work our way, whether that's via recommendation or further work from that client.
                </p>
              </motion.div>

              {/* Quote section */}
              <motion.div 
                variants={fadeInUp}
                className="w-full relative"
              >
                <div className="w-full bg-green-200 rounded-2xl relative">
                  <svg className="text-gray-600 fill-current absolute top-0 left-0 w-5 h-5 m-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 11" fill="none">
                    <path d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z"></path>
                  </svg>
                  
                  <div className="text-lg md:text-xl 4xl:text-2xl  tracking-tight text-gray-600 leading-tight indent-14 p-6">
                    My vision has always been to look after the clients we work with, but to also look after the staff just as much. That will get the best results for everyone.
                  </div>
                  
                  <div className="w-full flex flex-col items-start lg:flex-row lg:justify-end lg:items-end">
                    <div className="flex-shrink-0 px-6 pb-4 lg:flex-1">
                      <div className="flex items-end space-x-2 lg:space-x-3">
                        <div className="w-9 h-9 rounded-md lg:w-12 lg:h-12 lg:rounded-lg inline-flex overflow-hidden relative">
                          <div className="relative overflow-hidden w-full h-full">
                            <img 
                              src="/culture.webp" 
                              alt="Andy Golpys profile"
                              className="w-full h-full object-cover object-center absolute top-0 left-0"
                            />
                          </div>
                        </div>
                        <div className="leading-tight tracking-tight">
                          <div className="text-gray-600 dark:text-gray-300">
                            Andy Golpys
                          </div>
                          <div className="font-light text-xs lg:text-sm text-gray-400 dark:text-gray-400">
                            Co-Founder
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Button corner decoration */}
                    <div className="bg-white pl-3 items-end justify-end relative rounded-tl-2xl flex-1 inline-flex w-24 pt-10 -mt-8 ml-auto lg:w-auto lg:pt-3 lg:flex-none lg:rounded-tl-3xl lg:mt-0 lg:h-auto lg:ml-0 dark:bg-gray-800">
                      <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-current absolute -bottom-px left-px transform -translate-x-full rotate-180 dark:text-gray-800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                      </svg>
                      <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-current absolute top-px -right-px transform -translate-y-full rotate-180 dark:text-gray-800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                      </svg>
                      
                      {/* Button for desktop */}
                      <div className="w-full hidden lg:block">
                        <div className="relative group inline-flex items-center">
                          <a 
                            href="/learn-more" 
                            className="inline-flex relative group outline-none focus:outline-none"
                          >
                            <div className="w-auto inline-flex items-center justify-center relative leading-tight shadow-none overflow-hidden rounded-full border-default bg-gray-600 text-white dark:bg-gray-700 dark:text-gray-300 py-2 px-5">
                              <div className="relative inline-flex top-px flex-shrink-0">
                                <div>Learn about our culture</div>
                              </div>
                            </div>
                            <div className="bg-gray-600 dark:bg-gray-700 flex-shrink-0 overflow-hidden flex items-center justify-center -ml-1 rounded-full transform transition-transform w-9 h-9 xl:group-hover:translate-x-3 xl:group-hover:rotate-45">
                              <div className="w-9 h-9 flex items-center justify-center">
                                <svg className="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                  <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Mobile button */}
              <motion.div 
                variants={fadeInUp}
                className="w-full mt-3 lg:hidden"
              >
                <div className="relative group inline-flex items-center">
                  <a 
                    href="/learn-more" 
                    className="inline-flex relative group outline-none focus:outline-none"
                  >
                    <div className="w-auto inline-flex items-center justify-center relative leading-tight shadow-none overflow-hidden rounded-full border-default bg-gray-600 text-white dark:bg-gray-700 dark:text-gray-300 py-2 px-5">
                      <div className="relative inline-flex top-px flex-shrink-0">
                        <div>Learn about our culture</div>
                      </div>
                    </div>
                    <div className="bg-gray-600 dark:bg-gray-700 flex-shrink-0 overflow-hidden flex items-center justify-center -ml-1 rounded-full w-9 h-9">
                      <div className="w-9 h-9 flex items-center justify-center">
                        <svg className="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                          <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Culture;