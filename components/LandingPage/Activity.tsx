"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Activity = () => {
    // Array of activity data
    const activities = [
        { id: 1, name: "Box Cricket", image: "/Images/a1.png" },
        { id: 2, name: "Business Quiz", image: "/Images/a2.png" },
        { id: 3, name: "Fun Fiesta", image: "/Images/a3.png" },
        { id: 4, name: "Idea Pitching", image: "/Images/a4.png" },
        { id: 5, name: "Talent Triumphs", image: "/Images/a5.png" },
        { id: 6, name: "Treasure Hunt", image: "/Images/a6.png" },
        { id: 7, name: "Reel Making", image: "/Images/a7.png" },
        { id: 8, name: "Share Wars", image: "/Images/a8.png" },
        { id: 9, name: "E-Sports", image: "/Images/a9.png" },
    ];

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.15, duration: 0.4, ease: "easeOut" },
        }),
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="w-11/12 mx-auto flex items-center justify-center flex-col py-10">
            <motion.h2
                className="font-Montserrat text-5xl md:text-7xl font-black text-[#F9C63D] text-center [text-shadow:_10px_5px_2px_rgb(0_0_0)] [-webkit-text-stroke:_1px_black]"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
            >
                MORE THAN 9 ENGAGING ACTIVITIES
            </motion.h2>
            <div className="flex-wrap flex gap-5 mt-10 text-center w-full items-center justify-center">
                {activities.map((activity, index) => (
                    <motion.div
                        key={activity.id}
                        className="p-2 bg-[#F1473A] w-[45%] md:w-[40%] lg:w-[30%] xl:w-[23%] border-2 border-black rounded-lg [box-shadow:_3px_2px_2px_rgb(0_0_0)] hover:[box-shadow:_5px_4px_3px_rgb(0_0_0)] transition-all duration-300"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={index}
                    >
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSetmhYdL0zCYsjANSaXsQbh10xSf-1UfX0i2Hlx25D73LEajg/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={activity.image} width={500} height={500} alt={activity.name} />
                            <p className="text-white text-xl md:text-3xl font-semibold mt-3 uppercase font-lost-south tracking-widest">
                                {activity.name}
                            </p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Activity;
