"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    return (
        <section className='w-11/12 mx-auto flex justify-between py-3'>
            <Image src={"/Images/logo.png"} width={300} height={300} alt='logo' />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                    className="md:z-0 hover:scale-105 transition-all duration-500 font-semibold text-black bg-[#FFD200] border border-[#F9C63D] px-16 shadow-md shadow-gray-500 rounded-full py-2"
                    href="/sign-up"
                >
                    Register
                </Link>
            </motion.div>
        </section>
    )
}

export default Navbar
