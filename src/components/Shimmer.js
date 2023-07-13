import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap items-center justify-center pt-20">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="m-4 h-[300px] w-[250px] rounded-lg bg-gray-100 "
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
