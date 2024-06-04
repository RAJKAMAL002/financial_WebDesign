import React from "react";
import { Con4_1 } from "./Con4_1";
import { Con4_2 } from "./Con4_2";
import star from "../images/Star.png";

export const Container4 = () => {
  return (
    <div className=" flex justify-center items-center relative">
      <div className="  flex max-sm:flex-col-reverse justify-between  items-center w-[80vw] max-sm:w-[95vw]">
        <div className=" w-1/2 max-sm:w-full">
          <Con4_1 />
        </div>
        <div className=" w-1/2 max-sm:w-full">
          <Con4_2 />
        </div>
      </div>
      <img className=" absolute right-52 bottom-20 " src={star} />
    </div>
  );
};
