import React from "react";
import StoryCard from "./atom/StoryCard";
import Data from "./MarketStories.json";
const MarketStories = () => {
  return (
    <div className=" flex flex-col gap-4">
      <p className=" sm:block hidden bg-gray-200 w-fit text-2xl text-red-500 font-bold p-2">
        MARKET STORIES
      </p>
      <div className=" flex flex-col gap-10">
        {Data.map((item) => {
          return (
            <StoryCard
              key={item.id}
              img={item.img}
              heading={item.heading}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MarketStories;
