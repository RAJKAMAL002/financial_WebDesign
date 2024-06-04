import React from "react";
import circles from "../images/ellieps.png";
import screen from "../images/Screen1.png";
import widget from "../images/Srn4.1_widget.png";

export const Con4_1 = () => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <img
        className="rotate-[-15deg] bottom-12 max-sm:bottom-20  absolute"
        src={circles}
        alt=""
      />
      <img
        className="h-[605px] max-sm:h-[500px] rotate-[15deg]"
        src={screen}
        alt=""
      />
      <img
        className="absolute w-[230px] max-sm:w-[180px] top-[25%]"
        src={widget}
        alt=""
      />
      <div class="w-40 h-40 rounded-full custom-gradient3 absolute right-[260px] max-sm:right-[90px] -z-20"></div>
    </div>
  );
};
