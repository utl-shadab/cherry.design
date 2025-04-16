"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Echt Madrid",
        category: "Campaign proposal",
        media: "/urs.webp",
        type: "image",
    },
    {
        id: 2,
        title: "A salt for the detailed",
        category: "Gifting",
        media: "/urs.webp",
        type: "image",
    },
    {
        id: 3,
        title: "Yeah! Year notebook",
        category: "Gifting",
        media: "/achived.mp4",
        type: "video",
    },
    {
        id: 4,
        title: "URSA corporate website",
        category: "Web",
        media: "/urs.webp",
        type: "image",
    },
    {
        id: 5,
        title: "Globo Tours",
        category: "Branding",
        media: "/urs.webp",
        type: "image",
    },
    {
        id: 6,
        title: "Zero Jewels",
        category: "Branding",
        media: "/urs.webp",
        type: "image",
    },
];

const ArchivedWork = () => {
    return (
        <section className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold mb-6">ARCHIVED WORK</h2>
            <div className="flex flex-wrap gap-6">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="rounded-xl overflow-hidden shadow-md bg-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        {project.type === "video" ? (
                            <video autoPlay loop muted playsInline className="w-48 h-[250px] object-cover">
                                <source src={project.media} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={project.media}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="w-40 h-[120px] object-cover"
                            />
                        )}
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-medium">{project.title}</h3>
                            <p className="text-gray-500">({project.category})</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ArchivedWork;