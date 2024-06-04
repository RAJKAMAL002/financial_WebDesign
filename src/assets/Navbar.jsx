import React from "react";
import logoImg from "../images/logo.png";
export const Navbar = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" flex items-center justify-between w-[1090px] h-[60px] m-[40px]">
        <div className=" flex items-center justify-center">
          <div>
            <img src={logoImg} alt="logo image" />
          </div>
          <div className=" ml-10 max-sm:hidden">
            <a
              href="#"
              className=" px-3 text-shadow-md font-semibold text-[18px]  duration-200 hover:text-[#ff5555]"
            >
              Home
            </a>
            <a
              href="#"
              className=" px-3 text-shadow-md font-semibold text-[18px]  duration-200 hover:text-[#ff5555]"
            >
              About Us
            </a>
            <a
              href="#"
              className=" px-3 text-shadow-md font-semibold text-[18px]  duration-200 hover:text-[#ff5555]"
            >
              Pricing
            </a>
            <a
              href="#"
              className=" px-3 text-shadow-md font-semibold text-[18px] duration-200 hover:text-[#ff5555]"
            >
              Features
            </a>
          </div>
        </div>
        <div>
          <button className=" border-none w-[180px] text-[18px] h-[60px] bg-black rounded-md hover:bg-[#282828] duration-300 text-white max-sm:w-[120px] max-sm:h-[50px]">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
