import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, city, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="m-5 p-5">
      <div>
        <h2 className="font-bold">{name}</h2>
        <p>
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        <h4>{city}</h4>
        <h4>{areaName}</h4>
        <span className="bg-green-300 px-2">{"❇️"}</span>
        <span className="bg-green-300 px-1">{avgRating}</span>
      </div>
      <h2 className="font-bold py-5">Menu</h2>
      <ul className="">
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
