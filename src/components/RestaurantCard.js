import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
  } = resData;

  return (
    <div className="m-4 p-4 h-[300px] w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-semibold py-3 text-lg">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <div className="mt-auto flex items-center justify-between">
        <span className="bg-green-300 px-1 mt-1">❇️ {avgRating}</span>
        <h4 className="text-xs">{deliveryTime} MINS</h4>
        <h4 className="text-xs">{costForTwoString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

//Higher Order Component

export function withPromotedLabel(RestaurantCard) {
  return function ({ resData }) {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2">Promoted</label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
}
