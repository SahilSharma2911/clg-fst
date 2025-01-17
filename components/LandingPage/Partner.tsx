"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdPlayArrow } from "react-icons/md";

interface Partner {
  id: number;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, logo: "/Images/s1.png" },
  { id: 2, logo: "/Images/s2.png" },
  { id: 3, logo: "/Images/s1.png" },
  { id: 4, logo: "/Images/s2.png" },
  { id: 5, logo: "/Images/s1.png" },
  { id: 6, logo: "/Images/s2.png" },
];

const Partner = () => {
  const fadeUp = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const CustomPrevArrow = (props: { className?: string; onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <button
        className="absolute z-10 left-0 lg:left-4 top-1/2 -translate-y-1/2"
        onClick={onClick}
      >
        <MdPlayArrow
          size={34}
          className="text-[#929292] font-bold transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-black rotate-180"
        />
      </button>
    );
  };

  const CustomNextArrow = (props: { className?: string; onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <button
        className="absolute z-10 right-0 lg:right-4 top-1/2 -translate-y-1/2"
        onClick={onClick}
      >
        <MdPlayArrow
          size={34}
          className="text-[#929292] font-bold transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-black"
        />
      </button>
    );
  };

  const settings = {
    className: "center partner-slider",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    autoplay: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplaySpeed: 3000,
    cssEase: "linear",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white py-14 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-5 md:mb-10 text-center uppercase font-lost-south tracking-widest"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Our Partners
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full relative"
        >
          {/* Add custom styles to remove default arrows */}
          <style jsx global>{`
            .partner-slider .slick-prev,
            .partner-slider .slick-next {
              display: none !important;
            }
            .partner-slider .slick-list {
              margin: 0 -1rem;
            }
            .partner-slider .slick-slide > div {
              padding: 0 1rem;
            }
          `}</style>

          <Slider {...settings}>
            {partners.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="outline-none"
              >
                <div className="flex items-center justify-center p-4 cursor-pointer">
                  <Image
                    src={item.logo}
                    alt={`Partner ${item.id}`}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
