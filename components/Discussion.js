import React from "react";
import Card from "./atom/Card";
import Data from "./DiscussionForum.json";
const Discussion = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className=" sm:block hidden bg-gray-200 w-fit text-3xl text-red-500 font-bold p-2">
        DISCUSSION FORUM
      </p>
      <div className=" flex flex-col gap-10">
        {Data.map((item) => {
          return (
            <Card
              key={item.id}
              img={item.img}
              heading={item.heading}
              tag={item.tag}
              description={item.description}
              likeCount={item.like_count}
              viewCount={item.view_count}
              commentCount={item.comment_count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Discussion;
