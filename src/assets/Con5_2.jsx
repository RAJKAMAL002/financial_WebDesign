import React, { useState } from "react";
import img1 from "../images/con5_img1.png";
import img2 from "../images/con5_img2.png";
import img3 from "../images/con5_img3.png";
import img4 from "../images/con5_img4.png";
import img5 from "../images/con5_img5.png";
const imgList = [
  {
    img: img1,
    name: "Nick Jonas",
  },
  {
    img: img2,
    name: "Priyanka Chopra",
  },
  {
    img: img3,
    name: "Jeff Bezoz",
  },
  {
    img: img4,
    name: "Edward Vampire",
  },
  {
    img: img5,
    name: "Bella Vampire",
  },
];

export const Con5_2 = () => {
  const [name, setName] = useState("Nick Jonas");
  return (
    <div className="w-[65%] max-sm:w-[95vw] ">
      <div className=" flex items-center leading-none">
        <div className=" font-semibold text-[28px] ">
          The Best financial accounting app ever!
        </div>
      </div>
      <div className=" font-medium text-gray-500 my-5">
        Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
        blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
        nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
        suspendisse aliquam.
      </div>
      <div className=" flex max-sm:justify-center max-sm:items-center">
        {imgList.map((val) => {
          return (
            <img
              className="w-[30px] h-[30px] mx-1 cursor-pointer hover:scale-105"
              onClick={() => {
                setName(val.name);
              }}
              src={val.img}
              alt=""
            />
          );
        })}
      </div>
      <div className="mt-5 font-extrabold">{name}</div>
    </div>
  );
};
