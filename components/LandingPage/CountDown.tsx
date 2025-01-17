"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountDown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Set your target date here
    const targetDate = new Date('2025-02-28T23:59:59').getTime(); // Fixed February date

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const timeBlocks: { label: string; value: number }[] = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <motion.section
            className="relative w-full h-[500px] md:h-[400px] lg:h-[500px] my-6 md:my-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="absolute inset-0">
                <Image
                    src="/Images/bg-ylw.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 flex items-center justify-center h-full px-4 w-full mx-auto">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 md:gap-6 lg:gap-8 w-full max-w-6xl"
                    variants={containerVariants}
                >
                    {timeBlocks.map(({ label, value }) => (
                        <motion.div
                            key={label}
                            className="flex justify-center items-center flex-col"
                            variants={itemVariants}
                        >
                            <div className="text-[70px] lg:text-[100px] font-bold mb-1 md:mb-2 font-racing text-white [text-shadow:_10px_5px_2px_rgb(0_0_0)]">
                                {value.toString().padStart(2, '0')}
                            </div>
                            <div className="text-[30px] lg:text-[50px] font-medium font-lost-south -mt-5 md:-mt-2">
                                {label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CountDown;
