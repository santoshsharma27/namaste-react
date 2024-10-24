import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../utils/cartSlice";

function CartItems({ items }) {
  const dispatch = useDispatch();

  function addHandler(item) {
    dispatch(addItem(item));
  }

  function deleteHandler(item) {
    dispatch(deleteItem(item.card.info.id));
  }

  return (
    <div className="space-y-6 p-4">
      {items?.map((item) => (
        <div
          className="p-4 border-b flex flex-col md:flex-row items-center justify-between bg-white rounded-lg"
          key={item.card.info.id}
        >
          {/* Item Name and Price */}
          <div className="flex-1 text-left w-full md:w-3/5">
            <div className="font-bold text-lg text-gray-800">
              {item?.card?.info?.name}
            </div>
            <span className="block text-sm text-gray-600 mt-1">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>

          {/* Buttons for Add/Delete */}
          <div className="flex flex-row md:flex-row items-center justify-center mt-4 md:mt-0 space-x-3 md:w-2/5">
            <button
              className="px-4 py-2 border border-green-500 text-green-500 font-semibold rounded-md transition-colors hover:bg-green-500 hover:text-white"
              onClick={() => addHandler(item)}
            >
              +
            </button>
            <button
              className="px-4 py-2 border border-red-500 text-red-500 font-semibold rounded-md transition-colors hover:bg-red-500 hover:text-white"
              onClick={() => deleteHandler(item)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
