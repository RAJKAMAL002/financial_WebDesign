import React from "react";
import play_btn from "../images/play-btn.png";
import arrow from "../images/arrow.png";
import { Tape } from "./Tape";

export const Con1_1 = () => {
  return (
    <>
      <div className=" ml-[175px] max-sm:ml-0 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center  relative w-[full]">
        <h1 className=" text-[64px] max-sm:text-[50px] max-sm:text-center font-bold leading-none pb-8 ">
          Make The Best Financial Decisions
        </h1>
        <p className=" pb-6 text-[18px] text-gray-500  max-sm:text-center">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className=" flex items-center w-[374px] max-sm:w-[90vw] justify-between">
          <button className=" bg-black flex items-center justify-center text-white w-[180px] h-[60px] rounded-md text-[18px]  max-sm:w-[130px] max-sm:h-[50px] max-sm:text-[15px]">
            Learn More <img className=" ml-2" src={arrow} alt="" />
          </button>
          <div className=" flex justify-center items-center">
            <img src={play_btn} className=" mr-2" alt="" />
            <p className=" font-semibold text-[18px] max-sm:text-[15px]">
              Watch Video
            </p>
          </div>
          <div class="w-40 h-40 rounded-full custom-gradient absolute top-0 right-[200px] max-sm:right-[80px] -z-20"></div>
        </div>
        <div className=" mt-40">
          <Tape />
        </div>
      </div>
    </>
  );
};
