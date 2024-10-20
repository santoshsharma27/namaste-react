import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap items-center justify-center pt-4">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="m-4 w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[320px] flex flex-col rounded-lg bg-gray-200 shadow-lg animate-pulse"
          >
            <div className="h-[150px] sm:h-[180px] md:h-[200px] rounded-t-lg bg-gray-300"></div>
            <div className="p-4 flex flex-col h-full">
              <div className="h-5 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
              <div className="flex items-center justify-start text-sm mt-auto pt-3">
                <span className="bg-gray-300 h-5 w-16 rounded-md animate-pulse"></span>
                <h4 className="font-bold text-gray-300 px-2">•</h4>
                <h4 className="bg-gray-300 h-4 w-24 rounded-md animate-pulse"></h4>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
