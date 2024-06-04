import React from "react";
import icon from "../images/con4_icon.png";

export const Con4_2 = () => {
  return (
    <div className=" max-sm:text-center max-sm:w-full">
      <div className=" flex items-center max-sm:justify-center max-sm:my-3">
        <div className=" bg-[#ff5555] w-[48px] h-[48px] max-sm:w-[40px] max-sm:h-[40px] flex items-center justify-center rounded-full">
          <img className=" max-sm:w-[15px]" src={icon} alt="bell icon" />
        </div>
        <div className=" font-semibold text-[28px] pl-5">
          Clever Notification
        </div>
      </div>
      <div className=" font-medium text-gray-500 w-[562px] max-sm:w-[95vw] ">
        Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
        blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
        nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
        suspendisse aliquam.
      </div>
    </div>
  );
};
