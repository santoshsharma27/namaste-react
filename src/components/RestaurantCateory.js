import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import ItemList from "./ItemList";
import { useState } from "react";

function RestaurantCateory({ data, showItems, setShowIndex }) {
  function handleClick() {
    setShowIndex();
  }

  return (
    <div>
      <div className="w-6/12 bg-gray-50 p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">
            {data.title} ({data?.itemCards.length})
          </span>
          {!showItems ? (
            <span>
              <HiChevronDown />
            </span>
          ) : (
            <span>
              <HiChevronUp />
            </span>
          )}
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCateory;
