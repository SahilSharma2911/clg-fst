"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.section
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full fixed top-0 bg-white z-50 shadow-lg"
                >
                    <div className='w-11/12 mx-auto flex justify-between py-5 md:py-4 items-center'>
                        <Image src={"/Images/logo.png"} width={300} height={300} alt='logo' className='hidden lg:block' />
                        <Image src={"/Images/logo.png"} width={200} height={200} alt='logo' className='block lg:hidden' />
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                className="md:z-0 hover:scale-105 transition-all duration-500 font-semibold text-black bg-[#FFD200] border-2 border-black px-5 md:px-16 shadow-md [box-shadow:_2px_2px_2px_rgb(0_0_0)] rounded-full py-2.5"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSetmhYdL0zCYsjANSaXsQbh10xSf-1UfX0i2Hlx25D73LEajg/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Register
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Navbar;