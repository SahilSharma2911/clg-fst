import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col items-center justify-center my-7'>
            <div className='flex gap-4'>
                <Image src={"/Images/clg-logo1.png"} width={70} height={70} alt='logo1' />
                <Image src={"/Images/clg-logo2.png"} width={85} height={85} alt='logo1' />
            </div>
            <h1 className='text-3xl mt-3'>BHAgwan mahavir college of management</h1>
            <p className='text-xl mb-4'>PRESENT</p>
            <Image src={"/Images/hero-logo.png"} width={400} height={400} alt='logo1' />
            <p className='uppercase'>powered by</p>
            <div className='flex gap-4'>
                <Image src={"/Images/s1.png"} width={120} height={120} alt='logo1' />
                <Image src={"/Images/s2.png"} width={50} height={85} alt='logo1' />
            </div>
            <div className=" mt-[2rem] flex flex-col items-center md:w-9/12 mx-auto gap-6  ">
                <Link
                    className="md:z-0 hover:scale-105 transition-all duration-500 font-semibold bg-white border border-[#F9C63D] px-24 shadow-md shadow-gray-500 rounded-full text-[#636363]  py-2"
                    href="/sign-up"
                >
                    Register
                </Link>
            </div>
            <p className='font-Montserrat text-xl mt-4'>Welcome to Inspira 2K25, a vibrant management and cultural fest organized by Bhagwan Mahavir College of Management, Surat!</p>
        </section>
    )
}

export default Hero
