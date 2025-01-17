"use client"
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const SubHero = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            className="w-11/12 lg:w-10/12 mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.2 } },
            }}
        >
            <motion.div
                className="md:mt-2 flex flex-col items-center md:w-9/12 mx-auto gap-6"
                variants={fadeInUp}
            >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        className="md:z-0 hover:scale-105 transition-all duration-500 font-semibold bg-white border border-[#F9C63D] px-24 shadow-md shadow-gray-500 rounded-full text-[#636363] py-2"
                        href="/sign-up"
                    >
                        Register
                    </Link>
                </motion.div>
            </motion.div>
            <motion.p
                className="font-Montserrat text-xl md:text-2xl mt-7 md:mt-4"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
            >
                Welcome to Inspira 2K25, a vibrant management and cultural fest organized by Bhagwan Mahavir College of Management, Surat!
            </motion.p>
        </motion.div>
    );
};

export default SubHero;
