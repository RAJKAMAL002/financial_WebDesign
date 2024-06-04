import React from "react";
import star from "../images/Star.png";
const array = [
  {
    bg: "bg-[#ff5555]",
    text: "text-white",
    text1: "text-white",
  },
  {
    bg: "bg-white",
    text: "text-grey-500",
    text1: "text-black",
  },
  {
    bg: "bg-white",
    text: "text-grey-500",
    text1: "text-black",
  },
  {
    bg: "bg-[#ff5555]",
    text: "text-white",
    text1: "text-white",
  },
  {
    bg: "bg-[#ff5555]",
    text: "text-white",
    text1: "text-white",
  },
  {
    bg: "bg-white",
    text: "text-grey-500",
    text1: "text-black",
  },
];
export const Container6 = () => {
  return (
    <div className="flex justify-center items-center relative max-sm:mt-[40px]">
      <div className=" w-[80vw]">
        <div className="max-sm:text-center">
          <div className="text-[23px] text-[#ff5555]">FAQ</div>
          <div className="font-extrabold text-[48px] max-sm:text-[40px]  leading-none w-[500px] max-sm:w-full">
            Frequently asked questions
          </div>
        </div>
        <div className=" grid grid-cols-2 max-sm:grid-cols-1 mt-10">
          {array.map((val) => {
            return (
              <div
                className={`${val.bg} flex flex-col justify-center items-center w-[97%] h-[181px] rounded-lg m-3`}
              >
                <div className=" w-[85%]">
                  <div
                    className={`text-[28px] ${val.text} font-bold leading-none mb-3 max-sm:text-[23px]`}
                  >
                    The Best Financial Accounting App Ever!
                  </div>
                  <div
                    className={` flex justify-center items-center w-full text-[18px] ${val.text1} max-sm:text-[15px]`}
                  >
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris.
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <img className=" absolute left-90 top-20 " src={star} />
    </div>
  );
};
