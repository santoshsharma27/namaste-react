import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCateory";

const RestaurantMenu = () => {
  const [curOpen, setCurOpen] = useState(0);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // Show shimmer while loading
  if (resInfo === null) return <MenuShimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // Extract categories from the API response
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center m-5 pt-24">
      <h1 className="font-semibold text-2xl md:text-3xl mb-2">{name}</h1>
      <p className="italic text-sm md:text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="mt-4 space-y-4">
        {categories?.map((category, index) => (
          <RestaurantCategory
            curOpen={curOpen}
            onOpen={setCurOpen}
            data={category?.card?.card}
            num={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
