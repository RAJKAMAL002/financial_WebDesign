import React from "react";
import logo1 from "../images/logo.png";
import logo2 from "../images/mail_icon.png";
import logo3 from "../images/phone_icon.png";
const array = [
  ["Links", "Home", "About Us", "Bookings", "Blog"],
  ["Legal", "Terms Of Use", "Privacy Policy", "Cookie Policy"],
  ["Product", "Take Tour", "Live Chat", "Reviews"],
];

export const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-[150px] max-sm:mt-[40px]">
      <div className=" w-[80vw]">
        <div className=" grid grid-cols-5 max-sm:grid-cols-1">
          <div className=" flex flex-col justify-center max-sm:my-5">
            <div className=" my-1 max-sm:flex max-sm:justify-center w-full">
              <img className=" w-[80px]" src={logo1} alt="" />
            </div>
            <div className=" flex my-1 max-sm:justify-center">
              <img src={logo2} alt="" />
              <span className=" ml-2">help@frybix.com</span>
            </div>
            <div className=" flex my-1 max-sm:justify-center">
              <img src={logo3} alt="" />
              <span className=" ml-2">+1 234 456 678 89</span>
            </div>
          </div>
          {array.map((val) => {
            return (
              <div className=" max-sm:text-center max-sm:my-5">
                {val.map((txt, idx) => {
                  return idx === 0 ? (
                    <p className=" my-1 text-[24px] font-semibold">{txt}</p>
                  ) : (
                    <p className=" my-1 text-[18px] ">{txt}</p>
                  );
                })}
              </div>
            );
          })}
          <div className="max-sm:text-center">
            <p className=" my-1 text-[24px] font-semibold ">Newsletter</p>
            <p className=" my-1 text-[18px] ">Stay Up To Date</p>
            <div className=" flex my-8 max-sm:justify-center">
              <input
                type="text"
                placeholder="Your email"
                className=" outline-none  w-[120px]"
              />
              <button className="w-[160px] h-[50px] bg-black text-white rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className=" flex justify-center items-center pt-10 mt-20 mb-10 border-t-2 w-[70vw] font-semibold max-sm:text-center">
        Copyright 2022 uifry.com all rights reserved
      </p>
    </div>
  );
};
