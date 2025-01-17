"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

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
    const targetDate = new Date('2025-02-31T23:59:59').getTime();

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
                // Reset or handle countdown completion
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // Calculate immediately
        calculateTimeLeft();

        // Update every second
        const timer = setInterval(calculateTimeLeft, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    const timeBlocks: { label: string; value: number }[] = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <div className="absolute inset-0">
                <Image
                    src="/Images/bg-ylw.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8 w-full max-w-6xl">
                    {timeBlocks.map(({ label, value }) => (
                        <div
                            key={label}
                            className=""
                        >
                            <div className="text-[100px] font-bold mb-1 md:mb-2 font-racing text-white [text-shadow:_10px_5px_2px_rgb(0_0_0)]">
                                {value.toString().padStart(2, '0')}
                            </div>
                            <div className="text-sm md:text-base lg:text-[70px] font-medium">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountDown;