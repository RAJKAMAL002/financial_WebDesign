import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import icon from "../images/con5_icon.png";
import circles from "../images/ellieps.png";

export const Con5_1 = () => {
  return (
    <div className=" flex items-center justify-center w-[713px] max-sm:w-full">
      <div className="relative flex items-center justify-center">
        <img className="rotate-[-15deg]" src={circles} alt="" />
        <div className="absolute">
          <div className=" flex justify-center items-center">
            <img className="max-sm:w-[120px]" src={img1} alt="" />
            <div className=" w-[79.78px] max-sm:w-[50px] max-sm:h-[50px] h-[79.78px] bg-[#ff5555] rounded-full z-20 flex items-center justify-center ml-[-50px] max-sm:ml-[-30px] ">
              <img className="max-sm:w-[20px]" src={icon} alt="" />
            </div>
          </div>
        </div>
        <img
          className="absolute top-32 left-14 max-sm:w-[50px]"
          src={img2}
          alt=""
        />
        <img
          className="absolute top-32  right-20 max-sm:w-[40px]"
          src={img3}
          alt=""
        />
        <img
          className="absolute bottom-32 left-14 max-sm:w-[50px]"
          src={img4}
          alt=""
        />
        <img
          className="absolute bottom-32 right-20 max-sm:w-[40px]"
          src={img5}
          alt=""
        />
        <div class="w-40 h-40 absolute rounded-full custom-gradient  right-[260px] max-sm:right-[90px] -z-20"></div>
      </div>
    </div>
  );
};
