import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#FFD200] py-6 border-t-8 border-black mt-16">
      <div className=" w-11/12 mx-auto flex items-center justify-between">
        {/* logo section  */}
        <div className=" md:w-[250px]  md:h-[250px] size-40">
          <Image
            src={"/Images/hero-logo.png"}
            width={250}
            height={250}
            alt="logo1"
            className=" w-full h-full object-contain"
          />
        </div>

        {/* second section  */}
        <div className=" hidden sm:block">
          <h3 className=" font-lost-south sm:text-[1.8rem] md:text-[2.5rem] font-normal">
            connect with us
          </h3>
          <p className=" font-Montserrat font-bold flex gap-4 items-center">
            <span className="relative inline-block">
              <Image
                src="/insta1.png"
                alt="Instagram Logo"
                width={40} /* Adjust size as needed */
                height={40}
                className="rounded-md shadow-[4px_4px_0px_rgba(0,0,0,0.9)]"
              />
            </span>
            @bmcmsurat
          </p>
        </div>

        {/* last section  */}
        <div className=" flex flex-col items-center">
          <h3 className=" font-lost-south text-[1.8rem] md:text-[2.5rem] font-normal">
            presented by
          </h3>
          <div className=" flex gap-2">
            <Image
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
