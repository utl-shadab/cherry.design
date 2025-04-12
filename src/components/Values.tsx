"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
    {
        title: "Nurture and Grow",
        description:
            "Drive business growth with tailored web design strategies, leveraging meticulous research and analysis to create impactful digital experiences.",
        image: "/grow.svg",
    },
    {
        title: "Open and Honest",
        description:
            "Committed to creating a transparent atmosphere, we ensure open communication where all voices are respected and acknowledged.",
        image: "/honest.svg",
    },
    {
        title: "Sustainability First",
        description:
            "Developing robust, eco-conscious websites using advanced technologies for fast, secure, and scalable digital experiences.",
        image: "/sustainability.svg",
    },
];

const Values = () => {
    return (
        <div className="bg-black text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl w-full mx-auto ">
                {/* Heading */}
                <motion.h2
                    className="text-4xl md:text-6xl font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    Our Core Values
                </motion.h2>

                <motion.p
                    className="text-gray-400 mt-4 max-w-xl "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Our core values focus on delivering exceptional web design in Rutland, emphasizing innovation,
                    client satisfaction, and creating impactful digital experiences for local businesses.
                </motion.p>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 md:mt-20">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className=""
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-start">
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    width={80}
                                    height={80}
                                    className="mb-4"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold">{value.title}</h3>
                            <p className="text-gray-400 mt-2">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Values;
