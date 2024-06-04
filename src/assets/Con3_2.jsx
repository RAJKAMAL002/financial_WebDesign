import React from "react";
import icon1 from "../images/con2_icon.png";
import icon2 from "../images/con2_icon1.png";
import icon3 from "../images/con2_icon2.png";
const iconlist = [icon1, icon2, icon3];

export const Con3_2 = () => {
  return (
    <div className=" max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center">
      <div>
        <div className=" text-[#ff5555] text-[23px]">FEATURES</div>
        <div className=" font-extrabold text-[48px] max-sm:text-[40px]">
          Uifry Premium
        </div>
      </div>
      {iconlist.map((val) => {
        return (
          <div className=" my-5">
            <div className="flex items-center mb-3  max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-full">
              <span>
                <img src={val} />
              </span>
              <span className=" font-bold text-[23px] ml-3">
                Budgeting Intervals
              </span>
            </div>
            <div className="font-medium text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
          </div>
        );
      })}
    </div>
  );
};
