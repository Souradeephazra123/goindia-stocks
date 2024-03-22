import Image from "next/image";
import React from "react";
const StoryCard = ({ img, heading, description }) => {
  return (
    <div className=" h-full border-r border-l">
      <div className=" h-1/2">
        <Image
          src={img}
          width={100}
          height={50}
          className=" w-full h-full object-center"
        />
      </div>
      <div className=" h-1/2 p-3">
        <p className=" text-sm font-medium">{heading}</p>
        <p className=" text-xs">{description}</p>
      </div>
    </div>
  );
};

export default StoryCard;