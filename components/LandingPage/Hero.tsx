"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Define animation variants for reuse
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.section
            className="relative bg-[url('/Images/Group.png')] bg-cover bg-center bg-no-repeat py-16 md:pt-7 pb-10 px-4 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.div
                className="flex flex-col text-center items-center justify-center w-11/12 mx-auto"
                variants={staggerContainer}
            >
                <motion.div className="flex gap-4 mb-2" variants={fadeInUp}>
                    <Image src={"/Images/clg-logo3.jpeg"} width={90} height={90} alt="logo1" />
                    {/* <Image src={"/Images/clg-logo2.png"} width={75} height={75} alt="logo1" /> */}
                </motion.div>
                <motion.h1
                    className="text-4xl mt-1 font-lost-south tracking-widest"
                    variants={fadeInUp}
                >
                    BHAgwan mahavir college of management
                </motion.h1>
                <motion.p
                    className="text-xl mb-3 md:mb-4 font-Montserrat font-medium mt-2 md:mt-0"
                    variants={fadeInUp}
                >
                    PRESENT
                </motion.p>
                <motion.div variants={fadeInUp}>
                    <Image
                        src={"/Images/hero-logo.png"}
                        width={400}
                        height={400}
                        alt="logo1"
                        className="hidden md:block"
                    />
                    <Image
                        src={"/Images/hero-logo.png"}
                        width={250}
                        height={250}
                        alt="logo1"
                        className="block md:hidden"
                    />
                </motion.div>
                <motion.p
                    className="uppercase font-lost-south text-2xl mt-4 md:mt-7"
                    variants={fadeInUp}
                >
                    powered by
                </motion.p>
                <motion.div className="flex gap-6" variants={fadeInUp}>
                    <Image src={"/Images/s1.png"} width={150} height={150} alt="logo1" />
                    <Image src={"/Images/s2.png"} width={65} height={65} alt="logo1" />
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute top-[25%] left-16 hidden xl:block"
                variants={fadeInLeft}
            >
                <Image src={"/Images/h1.png"} width={350} height={350} alt="logo1" />
            </motion.div>
            <motion.div
                className="absolute bottom-2 left-[17%] hidden xl:block"
                variants={fadeInLeft}
            >
                <Image src={"/Images/h2.png"} width={300} height={300} alt="logo1" />
            </motion.div>
            <motion.div
                className="absolute top-[30%] right-[7%] hidden xl:block"
                variants={fadeInRight}
            >
                <Image src={"/Images/h3.png"} width={320} height={320} alt="logo1" />
            </motion.div>
            <motion.div
                className="absolute bottom-0 right-[2.5%] hidden xl:block"
                variants={fadeInRight}
            >
                <Image src={"/Images/h4.png"} width={350} height={350} alt="logo1" />
            </motion.div>
        </motion.section>
    );
};

export default Hero;
