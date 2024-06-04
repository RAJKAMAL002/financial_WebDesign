import React from "react";
import { Con2_1 } from "./Con2_1";
import { Con2_2 } from "./Con2_2";
import star from "../images/Star.png";

export const Container2 = () => {
  return (
    <div className=" flex justify-center items-center relative max-sm:mt-[40px]">
      <div className="  flex max-sm:flex-col justify-between items-center w-[80vw] max-sm:w-[95vw]">
        <div className="w-1/2 max-sm:w-full">
          <Con2_1 />
        </div>
        <div className="w-1/2 max-sm:w-full">
          <Con2_2 />
        </div>
      </div>
      <img
        className=" absolute right-10 top-0 w-[64px] h-[64px] -z-20"
        src={star}
      />
    </div>
  );
};
