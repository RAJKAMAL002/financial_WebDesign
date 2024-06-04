import React from "react";
import { Con1_1 } from "./Con1_1";
import { Con1_2 } from "./Con1_2";
import star from "../images/Star.png";

export const Container1 = () => {
  return (
    <div className="flex max-sm:flex-col">
      <div className="w-[55%] mt-10 max-sm:w-full">
        <Con1_1 />
      </div>
      <div className=" w-[45%] h-[600px] max-sm:hidden">
        <Con1_2 />
      </div>
      <img
        className=" absolute top-10 right-20 w-[64px] h-[64px] max-sm:hidden"
        src={star}
      />
      <img className=" absolute top-32 left-20 rotate-[-15deg]" src={star} />
      <img className=" absolute bottom-32 left-72 rotate-[-15deg]" src={star} />
      <img
        className=" absolute bottom-12 right-[500px] rotate-[15deg]"
        src={star}
      />
    </div>
  );
};
