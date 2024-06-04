import React from "react";
import circles from "../images/ellieps.png";
import screen from "../images/Screen1.png";

export const Con3_1 = () => {
  return (
    <div className="relative flex items-center justify-center w-full ">
      <img
        className="rotate-[-15deg] bottom-10 absolute right-5 max-sm:bottom-20"
        src={circles}
        alt=""
      />
      <img
        className="h-[605px] max-sm:h-[500px] rotate-[15deg]"
        src={screen}
        alt=""
      />
      <div class="w-40 h-40 rounded-full custom-gradient3 absolute right-[260px] max-sm:right-[80px] top-20 -z-20"></div>
    </div>
  );
};
