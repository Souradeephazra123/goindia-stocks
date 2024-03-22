import React, { useState } from "react";
import Discussion from "./Discussion";
import MarketStories from "./MarketStories";
import Sidebar from "./Sidebar";

const HomePageMobile = () => {
  const [Active, setActive] = useState("Discussion Forum");

  const arr = [
    {
      id: 1,
      name: "Discussion Forum",
    },
    {
      id: 2,
      name: "Market Stories",
    },
  ];

  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className=" p-2 flex flex-col gap-5">
      <div className=" w-full flex text-white  border-r-[5px] border-l-[5px] border-black ">
        {arr.map((item) => {
          return (
            <p
              className={`w-1/2 text-center cursor-pointer ${
                Active === item.name
                  ? "bg-[#2a0e6b] border-b border-x-red-800"
                  : "bg-blue-900"
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </p>
          );
        })}
      </div>
      {Active === "Discussion Forum" && <Discussion />}
      {Active === "Market Stories" && <MarketStories />}

      <div className="z-10 fixed top-0 left-0 ">
        <Sidebar isOpen={open} onToggle={handleClick} />
      </div>
    </div>
  );
};

export default HomePageMobile;
