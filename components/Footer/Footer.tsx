import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#FFD200] py-2 border-t-[6px] border-black mt-16">
      <div className=" w-11/12 mx-auto flex-col lg:flex-row flex gap-5 items-center justify-between">
        {/* logo section  */}
        <div className=" md:w-[250px] md:h-[250px] size-40">
          <Image
            src={"/Images/hero-logo.png"}
            width={250}
            height={250}
            alt="logo1"
            className=" w-full h-full object-contain"
          />
        </div>

        {/* second section  */}
        <div className="">
          <h3 className=" font-lost-south text-3xl md:text-4xl font-normal tracking-wide mb-1 lg:mb-7">
            connect with us
          </h3>
          <Link
            href="https://www.instagram.com/inspira_2k25/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-Montserrat font-bold flex gap-4 items-center text-xl"
          >
            <span className="relative inline-block">
              <Image
                src="/insta1.png"
                alt="Instagram Logo"
                width={40}
                height={40}
                className="rounded-md shadow-[4px_4px_0px_rgba(0,0,0,0.9)]"
              />
            </span>
            @bmcmsurat
          </Link>
        </div>

        {/* last section  */}
        <div className=" flex flex-col items-center mt-6 lg:mt-0 mb-16 lg:mb-0">
          <h3 className=" font-lost-south text-3xl md:text-4xl tracking-wide font-normal mb-1 lg:mb-1">
            presented by
          </h3>
          <div className=" flex gap-2">
            {/* <Image
              src={"/Images/clg-logo1.png"}
              width={60}
              height={60}
              alt="logo1"
            />
            <Image
              src={"/Images/clg-logo2.png"}
              width={75}
              height={75}
              alt="logo1"
            /> */}
            <Image src={"/Images/clg-logo3n.png"} width={80} height={80} alt="logo1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
