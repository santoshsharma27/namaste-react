import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constant";

const Body = () => {
  const [allRestaurants, setAllfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // async function getRestaurant to fetch API data
  const fetchData = async () => {
    try {
      const res = await fetch(SWIGGY_API);
      if (!res.ok) {
        throw new Error("Something went wrong with fetching restaurants");
      }

      const json = await res.json();
      console.log("API Response: ", json); // Log the entire response
      const resData = checkJsonData(json);

      setAllfRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to load restaurants. Please try again later.");
    }
  };

  // Make sure to pass jsonData to this function
  const checkJsonData = (jsonData) => {
    console.log(jsonData?.data?.cards.length);
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      let checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(checkData);
      if (checkData !== undefined) {
        return checkData;
      }
    }
    return []; // Return an empty array if no data found
  };

  const isOnline = useOnline();

  if (!isOnline)
    return <h1 className="p-10 m-10">Please check internet Connection...</h1>;

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value === "") {
      setFilteredRestaurants(allRestaurants);
      setErrorMessage("");
    } else {
      const filtered = allRestaurants.filter((res) =>
        res?.info?.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredRestaurants(filtered);

      if (filtered.length === 0) {
        setErrorMessage("No matching restaurants found.");
      } else {
        setErrorMessage("");
      }
    }
  };

  if (!allRestaurants) return null;

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 pt-20">
        <div className="w-[400px] sm:w-auto px-4 sm:px-0 flex justify-center">
          <input
            className="border border-solid w-full sm:w-[350px] max-w-[90%] sm:max-w-[350px] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-gray-100 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-200 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={() => {
              const filteredList = allRestaurants.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-center pt-10">{errorMessage}</p>
      )}
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap items-center justify-center pt-6">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant?.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
