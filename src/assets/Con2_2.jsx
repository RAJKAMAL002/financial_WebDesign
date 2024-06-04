import React from "react";
import circles from "../images/ellieps.png";
import screen from "../images/Screen2.png";
import widget from "../images/Srn3.1_widget.png";

export const Con2_2 = () => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <img
        className="rotate-[-15deg]  bottom-12 max-sm:bottom-20  absolute"
        src={circles}
        alt=""
      />
      <img
        className="h-[605px] max-sm:h-[500px] rotate-[15deg]"
        src={screen}
        alt=""
      />
      <img
        className="absolute mb-16 ml-28 max-sm:w-[250px]"
        src={widget}
        alt=""
      />
      <div class="w-40 h-40 rounded-full custom-gradient absolute right-[260px] max-sm:right-[80px] -z-20"></div>
    </div>
  );
};
