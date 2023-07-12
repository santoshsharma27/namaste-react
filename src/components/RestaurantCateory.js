import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import ItemList from "./ItemList";
import { useState } from "react";

function RestaurantCateory({ data }) {
  const [showItem, setShowItems] = useState(true);

  function handleClick() {
    setShowItems(!showItem);
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
          {!showItem ? (
            <span>
              <HiChevronDown />
            </span>
          ) : (
            <span>
              <HiChevronUp />
            </span>
          )}
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCateory;
