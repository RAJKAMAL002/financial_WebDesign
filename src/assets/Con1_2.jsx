import React from "react";
import img1 from "../images/Screen1.png";
import img2 from "../images/Screen2.png";
import img3 from "../images/Screen1.png";
import img4 from "../images/ellieps.png";

export const Con1_2 = () => {
  return (
    <div className="relative w-full h-full max-sm:flex max-sm:justify-center max-sm:hidden">
      <div className="absolute w-full h-full top-0">
        <img
          className="absolute right-40 z-20 top-0  h-[605px]"
          src={img1}
          alt="Image 1"
        />
        <img
          className="absolute right-20 z-10 top-16 h-[605px]"
          src={img2}
          alt="Image 2"
        />
        <img
          className="absolute right-0 top-32  h-[605px]"
          src={img3}
          alt="Image 3"
        />
        <img
          className="absolute right-0 -z-10  h-[605px] "
          src={img4}
          alt="Image 3"
        />
        <div class="w-40 h-40 rounded-full custom-gradient1 absolute bottom-0 right-[200px] -z-20"></div>
      </div>
    </div>
  );
};
