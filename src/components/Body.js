import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnlineStatus";
import { SWIGGY_API } from "./utils/constant";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const Body = () => {
  // Local State Behaviour - Super powerful variable

  const [listOfRestaurants, setListOfRestraunts] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(SWIGGY_API);
      // if response is not ok then throw new Error
      if (!res.ok)
        throw new Error("Something went wrong with fetching restaurants");

      const json = await res.json();
      console.log(json);

      // Optional Chaining
      setListOfRestraunts(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.error(error); // show error in console
    }
  };

  if (!listOfRestaurants) return null;

  const isOnline = useOnline();

  if (!isOnline)
    return <h1 className="error">Please check internet Connection...</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center justify-center">
        <div className="m-1 p-4">
          <input
            className="border border-solid border-black w[2500px]"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-5 px-3 bg-green-300 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-1 p-4 flex items-center">
          <button
            className="bg-gray-100 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.data?.avgRating > 4
              );
              setListOfRestraunts(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
