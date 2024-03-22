import Image from "next/image";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineModeComment } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
const Card = ({
  img,
  heading,
  tag,
  description,
  likeCount,
  viewCount,
  commentCount,
}) => {
  return (
    <div>
      <div
        className=" flex justify-between p-3 items-start rounded-sm text-[10px] sm:text-base"
        style={{ boxShadow: " 2px 2px 0px 4px #D5D8DC" }}
      >
        <div className="flex gap-2 items-start">
          <Image
            src={img}
            alt="post"
            width={40}
            height={40}
            className=" rounded-full sm:w-[40px] w-[30px] sm:h-[40px] h-[30px]"
          />
          <div className=" flex flex-col gap-2">
            <div className=" flex gap-5 items-center">
              <p className=" font-medium text-[11px] sm:text-base">{heading}</p>
              <p className=" rounded-full bg-blue-800 text-white px-3 py-[2px] sm:text-xs w-fit items-center justify-center">
                {tag}
              </p>
            </div>
            <div className=" text-[11px] sm:text-base">{description}</div>
            <div className="flex justify-between">
              <div className=" flex  gap-1 sm:gap-2 items-center">
                <Image
                  src={"/like.png"}
                  width={30}
                  height={30}
                  className=" sm:w-[30px] w-[12px] sm:h-[30px] h-[12px]"
                />
                <p>{likeCount}</p>
              </div>
              <div className=" flex gap-1 sm:gap-2 items-center">
                <IoEyeOutline
                  size={30}
                  className=" sm:w-[30px] w-[12px] sm:h-[30px] h-[12px]"
                />
                <p>{viewCount}</p>
              </div>
              <div className=" flex gap-1 sm:gap-2 items-center">
                <MdOutlineModeComment
                  size={30}
                  className=" sm:w-[30px] w-[12px] sm:h-[30px] h-[12px]"
                />
                <p>{commentCount} comments</p>
              </div>
              <div className=" flex gap-1 sm:gap-2 items-center">
                <IoShareSocialOutline
                  size={30}
                  className=" sm:w-[30px] w-[12px] sm:h-[30px] h-[12px]"
                />
                <p>share </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-start whitespace-nowrap">
          <p className=" text-blue-500">2 min ago</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
