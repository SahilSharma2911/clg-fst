import Image from "next/image";
import React from "react";

const LastSection = () => {
  return (
    <div className=" mt-10 w-11/12 mx-auto">
      <h3 className="font-Montserrat text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#D60CF5] via-[#6239F4] to-[#F50CA0] tracking-wider leading-tight text-stork-lg">
        REGISTER ASAP FOR A DAY FULL OF INNOVATION AND EXCITEMENT !!!
      </h3>

      <p className=" font-Montserrat font-light text-lg text-center mt-5 md:mt-10 md:px-14">
        Experience the perfect blend of creativity, competition, and learning at
        Inspira 2K25, the ultimate management and cultural fest by Bhagwan
        Mahavir College of Management. Dive into a dynamic atmosphere where
        students from across institutions come together to showcase their
        skills, strategic thinking, and artistic talents. From exhilarating
        competitions to insightful workshops, every moment promises excitement
        and growth.
      </p>

      <p className=" font-Montserrat font-light text-lg text-center mt-5 md:mt-10 md:px-14">
        {" "}
        Whether you&#39;re a budding manager, an innovative thinker, or a
        creative enthusiast, Inspira 2K25 offers something for everyone. Connect
        with like-minded peers, compete for glory, and gain invaluable
        experiences that shape future leaders. Don&#39;t miss this opportunity
        to learn, lead, and leave your mark—register now and be part of an
        unforgettable journey!
      </p>

      {/* images section  */}
      <div className=" flex flex-col md:flex-row gap-8 md:mt-10">
        {/* img -1  */}
        <div className=" w-full md:w-1/3 h-[500px] border-8 border-black rounded-full overflow-hidden box-border">
          <Image
            src="/bmu.jpeg"
            alt="image"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </div>

        {/* img -2  */}
        <div className="w-full md:w-1/3 h-[500px] border-8 border-black rounded-full overflow-hidden box-border">
          <Image
            src={"/member.jpeg"}
            alt="imgae"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </div>

        {/* img -3  */}
        <div className="w-full md:w-1/3 h-[500px] border-8 border-black rounded-full overflow-hidden box-border">
          <Image
            src={"/other.jpeg"}
            alt="imgae"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </div>
      </div>

      {/* button  */}
      <div className=" flex justify-center items-center mt-10">
        <button className="md:z-0 font-lost-south hover:scale-105 transition-all duration-500 font-semibold text-black bg-[#FFD200] border-2 border-black px-5 md:px-16 shadow-md [box-shadow:_2px_2px_2px_rgb(0_0_0)] rounded-full py-1 text-[1.6rem] md:text-[2rem]">DOWNLOAD OUR BORCHURE</button>
      </div>
    </div>
  );
};

export default LastSection;
