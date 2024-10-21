import { CDN_URL } from "../utils/constant";
import { addItem, deleteItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function ItemList({ items }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items); // Get cart items from store
  const [addedItemId, setAddedItemId] = useState(null); // Track the last added item for button feedback
  const [showToast, setShowToast] = useState(false); // State for the toast notification

  function addHandler(item) {
    dispatch(addItem(item));
    setAddedItemId(item.card.info.id); // Track the added item
    setShowToast(true); // Show toast notification

    // Hide toast after 2 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  function deleteHandler(item) {
    dispatch(deleteItem(item)); // Dispatch delete action
    if (addedItemId === item.card.info.id) {
      setAddedItemId(null); // Reset addedItemId so it can be added again
    }
  }

  return (
    <div className="space-y-6 p-4 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg transition-transform duration-300">
          Item added to cart!
        </div>
      )}

      {items?.map((item) => {
        const isItemInCart = cartItems.some(
          (cartItem) => cartItem.card.info.id === item.card.info.id
        );

        return (
          <div
            className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-lg rounded-lg transition-transform hover:scale-[1.02] hover:shadow-md"
            key={item.card.info.id}
          >
            {/* Item Details */}
            <div className="flex-1 text-left md:w-3/5">
              <div className="font-bold text-lg text-gray-800">
                {item?.card?.info?.name}
              </div>
              <span className="block text-sm text-gray-500 mt-1">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-sm text-gray-600 mt-2">
                {item.card.info.description}
              </p>
            </div>

            {/* Item Image and Action Buttons */}
            <div className="flex flex-col md:flex-row items-center md:w-2/5 mt-4 md:mt-0">
              <img
                className="w-32 h-24 object-cover rounded-md mb-4 md:mb-0 md:mr-4 shadow-sm"
                src={CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded-md text-white font-semibold transition-colors ${
                    addedItemId === item.card.info.id
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                  onClick={() => addHandler(item)}
                  disabled={addedItemId === item.card.info.id} // Disable button if item was just added
                >
                  {addedItemId === item.card.info.id ? "Added" : "ADD +"}
                </button>
                {/* Show Delete button only if item is in the cart */}
                {isItemInCart && (
                  <button
                    className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 font-semibold"
                    onClick={() => deleteHandler(item)}
                  >
                    DELETE
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
