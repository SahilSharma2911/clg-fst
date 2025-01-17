"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    return (
        <section className='w-11/12 mx-auto flex justify-between py-5 md:py-3'>
            <Image src={"/Images/logo.png"} width={300} height={300} alt='logo' className='hidden lg:block'/>
            <Image src={"/Images/logo.png"} width={200} height={200} alt='logo' className='block lg:hidden'/>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                    className="md:z-0 hover:scale-105 transition-all duration-500 font-semibold text-black bg-[#FFD200] border-2 border-black px-5 md:px-16 shadow-md [box-shadow:_2px_2px_2px_rgb(0_0_0)] rounded-full py-2"
                    href="/sign-up"
                >
                    Register
                </Link>
            </motion.div>
        </section>
    )
}

export default Navbar
