import React from "react";
import frame from "../images/Frame.png";
import star from "../images/Star.png";
export const Container7 = () => {
  return (
    <div className=" flex justify-center items-center mt-[150px] max-sm:mt-[40px] relative">
      <div className="relative w-[80vw] max-sm:w-[95vw]">
        <div class="w-40 h-40 rounded-full custom-gradient absolute top-0 left-0 -z-20 mt-[-90px] ml-[-90px]"></div>
        <img src={frame} className=" w-full" alt="" />
      </div>
      <img className=" absolute right-10 top-0 w-[64px] h-[64px]" src={star} />
      <img className=" absolute left-10 top-32 rotate-[-15deg]" src={star} />
    </div>
  );
};
