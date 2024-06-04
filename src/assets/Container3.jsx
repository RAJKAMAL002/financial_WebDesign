import React from "react";
import { Con3_1 } from "./Con3_1";
import { Con3_2 } from "./Con3_2";
import star from "../images/Star.png";

export const Container3 = () => {
  return (
    <div className=" flex justify-center items-center relative">
      <div className=" mt-[200px] max-sm:mt-0 flex max-sm:flex-col justify-between items-center w-[80vw] max-sm:w-[95vw]">
        <div className=" w-1/2 max-sm:w-full">
          <Con3_1 />
        </div>
        <div className=" w-1/2 max-sm:w-full">
          <Con3_2 />
        </div>
      </div>
      <img className=" absolute left-10 top-0 w-[64px] h-[64px]" src={star} />
    </div>
  );
};
