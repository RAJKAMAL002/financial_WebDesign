import React from "react";
import { Con5_1 } from "./Con5_1";
import { Con5_2 } from "./Con5_2";
import star from "../images/Star.png";
export const Container5 = () => {
  return (
    <div className=" flex flex-col justify-center items-center relative max-sm:text-center max-sm:mt-[40px]">
      <div className=" text-center flex flex-col justify-center items-center ">
        <div className="text-[23px]">TESTIMONAL</div>
        <div className="font-extrabold text-[48px] w-[60%] leading-none max-sm:w-full max-sm:text-[40px] ">
          what our users say about us?
        </div>
      </div>
      <div className="flex justify-between items-center w-[80vw] max-sm:flex-col max-sm:w-[95vw] ">
        <div className=" w-1/2 flex max-sm:flex-col items-center justify-center max-sm:w-full">
          <Con5_1 />
        </div>
        <div className=" w-1/2 flex justify-center items-center max-sm:w-full">
          <Con5_2 />
        </div>
      </div>
      <img className=" absolute left-10 bottom-10 rotate-[-15deg]" src={star} />
    </div>
  );
};
