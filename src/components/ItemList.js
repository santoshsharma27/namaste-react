import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function ItemList({ items }) {
  const dispatch = useDispatch();
  function addHandler(item) {
    dispatch(addItem(item));
  }

  return (
    <div className="space-y-4">
      {items?.map((item) => (
        <div
          className="p-2 border-b text-left flex flex-col md:flex-row justify-between"
          key={item.card.info.id}
        >
          <div className="py-2 w-full md:w-3/5">
            <div className="font-semibold">{item?.card?.info?.name}</div>
            <span className="block">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm opacity-40">{item.card.info.description}</p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:w-2/5">
            <img
              className="w-30 h-20 relative rounded-md mb-2 md:mb-0"
              src={CDN_URL + item?.card?.info?.imageId}
              alt="item image"
            />
            <button
              className="px-5 py-1 border text-green-500 font-semibold rounded-md text-center md:ml-5 mt-2 md:mt-0"
              onClick={() => addHandler(item)}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
