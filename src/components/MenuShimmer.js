import React from "react";

const MenuShimmer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:pt-48">
      {/* Simulating multiple shimmer list items vertically */}
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="p-2 m-2 border-b text-left flex justify-between animate-pulse w-full max-w-md"
          >
            {/* Placeholder for the text content (name, price, description) */}
            <div className="py-2 w-3/4">
              {/* Restaurant name shimmer */}
              <div className="h-6 bg-gray-300 rounded w-4/5 mb-2"></div>
              {/* Price shimmer */}
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
              {/* Description shimmer */}
              <div className="h-3 bg-gray-100 rounded w-full mb-1"></div>
              <div className="h-3 bg-gray-100 rounded w-4/5"></div>
            </div>

            {/* Placeholder for the image */}
            <div className="w-24 h-16 bg-gray-300 rounded-md"></div>

            {/* Placeholder for the button */}
            <div className="px-5 flex items-center">
              <div className="w-16 h-8 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuShimmer;
