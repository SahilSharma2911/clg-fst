"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const LastSection = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-6 md:mt-8 w-11/12 mx-auto"
    >
      <motion.h3
        variants={fadeInDown}
        className="font-Montserrat text-5xl md:text-7xl font-black text-center text-[#F50CA0] [text-shadow:_10px_5px_2px_rgb(0_0_0)] [-webkit-text-stroke:_1px_black]"
      >
        REGISTER <b className="text-[#F9C63D]">ASAP</b> FOR A DAY FULL OF INNOVATION AND EXCITEMENT !!!
      </motion.h3>

      <motion.p
        variants={fadeInUp}
        className="font-Montserrat text-xl text-center mt-5 md:mt-10 md:px-14"
      >
        Experience the perfect blend of creativity, competition, and learning at Inspira 2K25, the
        ultimate management and cultural fest by Bhagwan Mahavir College of Management. Dive into a
        dynamic atmosphere where students from across institutions come together to showcase their
        skills, strategic thinking, and artistic talents. From exhilarating competitions to
        insightful workshops, every moment promises excitement and growth.
      </motion.p>

      <motion.p
        variants={fadeInUp}
        className="font-Montserrat text-xl text-center mt-5 md:mt-10 md:px-14"
      >
        Whether you&#39;re a budding manager, an innovative thinker, or a creative enthusiast,
        Inspira 2K25 offers something for everyone. Connect with like-minded peers, compete for
        glory, and gain invaluable experiences that shape future leaders. Don&#39;t miss this
        opportunity to learn, lead, and leave your mark—register now and be part of an unforgettable
        journey!
      </motion.p>

      {/* Images Section */}
      <motion.div
        variants={staggerContainer}
        className="hidden lg:flex flex-col md:flex-row gap-8 mt-12 md:mt-14"
      >
        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/3 h-[500px] md:h-[550px] border-4 border-black rounded-full overflow-hidden box-border [box-shadow:_-4px_2px_2px_rgb(0_0_0)]"
        >
          <Image
            src={"/Images/bmu.jpeg"}
            alt="image"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/3 h-[500px] md:h-[550px] border-4 border-black rounded-full overflow-hidden box-border"
        >
          <Image
            src={"/member.jpeg"}
            alt="image"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/3 h-[500px] md:h-[550px] border-4 border-black rounded-full overflow-hidden box-border [box-shadow:_4px_2px_2px_rgb(0_0_0)]"
        >
          <Image
            src={"/other.jpeg"}
            alt="image"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="flex lg:hidden flex-wrap justify-center mt-8 md:mt-10"
      >
        {/* First row on mobile (2 images) */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <motion.div
            variants={fadeInUp}
            className="w-[45%] md:w-1/3 h-[280px] md:h-[400px] border-2 md:border-4 border-black rounded-full overflow-hidden box-border [box-shadow:_-2px_1px_1px_rgb(0_0_0)]"
          >
            <Image
              src="/Images/bmu.jpeg"
              alt="image"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-[45%] md:w-1/3 h-[280px] md:h-[400px] border-2 md:border-4 border-black rounded-full overflow-hidden box-border"
          >
            <Image
              src="/member.jpeg"
              alt="image"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </motion.div>
        </div>

        {/* Second row on mobile (1 centered image) */}
        <motion.div
          variants={fadeInUp}
          className="w-[45%] md:w-1/3 h-[280px] md:h-[400px] border-2 md:border-4 border-black rounded-full overflow-hidden box-border [box-shadow:_2px_1px_1px_rgb(0_0_0)]"
        >
          <Image
            src="/other.jpeg"
            alt="image"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </motion.div>
      </motion.div>

      {/* Button */}
      <motion.div
        variants={fadeInUp}
        className="flex justify-center items-center my-20 md:my-24"
      >
        <button className="md:z-0 font-lost-south tracking-widest hover:scale-105 transition-all duration-500 font-semibold text-black bg-[#FFD200] border-2 border-black px-5 md:px-16 shadow-md [box-shadow:_2px_2px_2px_rgb(0_0_0)] rounded-full py-1.5 text-2xl">
          DOWNLOAD OUR BROCHURE
        </button>
      </motion.div>
    </motion.div>
  );
};

export default LastSection;
