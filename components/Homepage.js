"use client";
import React, { useState } from "react";
import Discussion from "./Discussion";
import StoryCard from "./atom/StoryCard";
import MarketStories from "./MarketStories";
import Sidebar from "./Sidebar";

const Homepage = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className=" w-full flex gap-3">
      <div
        className={`  h-screen fixed top-0 left-0 ${open ? "w-1/4" : "w-4"} `}
      >
        <Sidebar isOpen={open} onToggle={handleClick} />
      </div>
      {open && <div className=" w-3/4"></div>}

      <div className="flex gap-16">
        <div className=" w-3/4">
          <Discussion />
        </div>
        <div className=" w-1/4">
          <MarketStories />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
