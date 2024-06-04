import React from "react";
import troffy from "../images/troffy_symbol.png";
import fin from "../images/finance_symbol.png";
import star from "../images/Star.png";

export const Tape = () => {
  return (
    <div className="relative w-[685px] max-sm:w-full max-sm:my-[30vh] max-sm:z-20 max-sm:justify-center max-sm:items-center max-sm:hidden">
      <div className="flex items-center justify-center rotate-[-25deg] relative">
        <p className="text-[110px] font-extrabold absolute left-1">A</p>
        <div className=" w-[534.32px] h-[79px] mb-1 bg-black absolute left-[56px] rotate-[-2deg] rounded-r-lg flex item-center justify-center">
          <div className="flex item-center justify-between w-[90%]">
            <div className=" text-white flex items-center justify-center text-[13px] ">
              <img src={troffy} />
              <div>
                <h3 className=" font-semibold text-[14px]">Achievements</h3>
                <p>Best Finance App On Playstore</p>
              </div>
            </div>
            <div className="text-white flex items-center justify-center text-[13px]">
              <img src={fin} />
              <div>
                <h3 className=" font-semibold text-[14px]">Finance</h3>
                <p>Most Popular Accounting App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[352.75px] h-[75px] bg-[#ff5555] absolute -z-20 rotate-[-45.74deg] right-[79px] top-0 mt-[-20px] trap rounded-lg flex items-center justify-center text-[13px] font-extrabold">
        Make The Best Financial Decisions
      </div>
      <div className=" w-[256px] h-[75px] bg-[#e24b4b] rounded-r-lg absolute -z-30 top-[92px] right-[95px] flex items-center justify-center">
        <div className="w-[20%]"></div>
        <div className=" w-[30%] border-x-2 border-black   flex justify-center items-center h-full">
          <img src={star} alt="" />
        </div>
        <div className=" flex flex-col justify-end items-center text-[13px] pl-3">
          <div>
            <div className="  font-extrabold">Uifry Premium</div>
            <div>Free Trial</div>
          </div>
        </div>
      </div>
    </div>
  );
};
