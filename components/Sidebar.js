"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { BiSolidCommentDetail } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { GoTriangleUp } from "react-icons/go";
import SidebarContentData from "./SidebarContent.json";
const Sidebar = ({ isOpen, onToggle }) => {
  const iconMapping = {
    Discussion: BiSolidCommentDetail,
    Market_story: HiOutlineCurrencyDollar,
  };

  // const [open, setOpen] = useState(true);
  // const handleClick = () => {
  //   setOpen(!open);
  // };
  const [Active, setActive] = useState(1);
  return (
    <div className=" w-full flex gap-0 ">
      <div
        className={` w-full h-screen bg-blue-950 text-white ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <div className=" flex justify-between items-center border-b p-3">
          <div className=" flex gap-2 items-center">
            <FaUserCircle color="purple" size={40} /> <span>Hello,user</span>{" "}
          </div>
          <div className="relative">
            <IoNotifications size={30} />
            <div className=" circle bg-red-600 w-2 h-2 absolute right-1 top-1 rounded-full"></div>
          </div>
        </div>
        <div>
          {SidebarContentData.map((item) => {
            const IconComponent = iconMapping[item.icon];
            return (
              <div
                key={item.id}
                className={`flex items-center justify-between px-4 py-1 cursor-pointer mt-3 ${
                  item.id === Active ? "bg-black" : ""
                }`}
                onClick={() => setActive(item.id)}
              >
                <div className=" flex gap-2 items-center">
                  {IconComponent ? (
                    <IconComponent size={20} />
                  ) : (
                    <div className=" w-[20px] h-[20px] rounded-full"></div>
                  )}

                  <span>{item.name}</span>
                </div>
                <div>
                  {item.id === Active ? (
                    <GoTriangleUp
                      size={20}
                      color="white"
                      className="rotate-180"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-4 h-screen bg-gray-400 flex items-center justify-center">
        <div
          className={`w-4 h-10 bg-blue-500 flex items-center justify-center ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={() => onToggle()}
        >
          <GoTriangleUp size={40} color="white" className=" rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
