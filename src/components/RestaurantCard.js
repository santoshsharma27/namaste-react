import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="m-4 p-4 w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[320px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <img
        className="rounded-lg w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-semibold py-3 text-lg text-gray-800">
        {name.slice(0, 30)}
      </h3>
      <div>
        <h4 className="text-sm text-gray-600 truncate">
          {cuisines.join(", ")}
        </h4>
      </div>

      <div className="mt-auto flex items-center justify-start text-sm pt-3">
        <span className="bg-green-600 px-2 py-1 rounded-md text-white">
          ❇️ {avgRating}
        </span>
        <h4 className="font-bold text-gray-600 px-2">•</h4>
        <h4 className="text-gray-600 font-bold">{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

// Higher Order Component with Promoted Label
export function withPromotedLabel(RestaurantCard) {
  return function ({ resData }) {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
}
