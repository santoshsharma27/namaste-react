import { CDN_URL } from "../utils/constant";
import { addItem, decreaseItemQuantity, deleteItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// Toast Notification Component
function Toast({ notification }) {
  if (!notification) return null;

  return (
    <div
      className={`fixed top-20 right-4 p-3 rounded-lg shadow-lg transition-transform duration-300 z-50 ${
        notification.type === "add" ? "bg-green-500" : "bg-red-500"
      } text-white`}
      style={{ zIndex: 9999 }}
    >
      {notification.message}
    </div>
  );
}

function ItemList({ items, setNotification }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cart);
  const [itemCounts, setItemCounts] = useState({});

  function addHandler(item) {
    const itemId = item.card.info.id;

    dispatch(addItem(item));
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));

    setNotification({ type: "add", message: "Item added to cart!" });
    setTimeout(() => {
      setNotification(null);
    }, 1000);
  }

  function decreaseItemHandler(item) {
    const itemId = item.card.info.id;

    setItemCounts((prevCounts) => {
      const currentCount = prevCounts[itemId] || 0;

      if (currentCount > 1) {
        const updatedCounts = {
          ...prevCounts,
          [itemId]: currentCount - 1,
        };
        dispatch(decreaseItemQuantity(itemId)); // Update the quantity in the Redux store
        return updatedCounts; // Update local state
      } else if (currentCount === 1) {
        dispatch(deleteItem(itemId)); // Remove item from cart
        return {
          ...prevCounts,
          [itemId]: 0, // Set count to zero in local state
        };
      }
      return prevCounts; // No change if count is already zero
    });
  }

  return (
    <div className="space-y-6 p-4 relative">
      {items?.map((item) => {
        const isItemInCart = cartItems.some(
          (cartItem) => cartItem.card.info.id === item.card.info.id
        );
        const currentCount = itemCounts[item.card.info.id] || 0;

        return (
          <div
            className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-lg rounded-lg hover:shadow-md"
            key={item.card.info.id}
            style={{ minHeight: "160px" }}
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
            <div className="flex flex-col md:flex-row items-center md:w-2/5 mt-4 md:mt-0 justify-around">
              <img
                className="w-32 h-24 object-cover rounded-md mb-4 md:mb-0 md:mr-4 shadow-sm"
                src={CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <div className="flex items-center space-x-2">
                <button
                  className="w-10 h-10 flex justify-center items-center border border-green-500 text-green-500 font-semibold rounded-md transition-colors hover:bg-green-500 hover:text-white"
                  onClick={() => addHandler(item)}
                >
                  +
                </button>
                {isItemInCart && (
                  <span className="text-lg font-semibold">{currentCount}</span>
                )}
                {isItemInCart && (
                  <button
                    className="w-10 h-10 flex justify-center items-center border border-red-500 text-red-500 font-semibold rounded-md transition-colors hover:bg-red-500 hover:text-white"
                    onClick={() => decreaseItemHandler(item)}
                  >
                    -
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

export default function ItemListWithToast({ items }) {
  const [notification, setNotification] = useState(null);

  return (
    <>
      <Toast notification={notification} />
      <ItemList items={items} setNotification={setNotification} />
    </>
  );
}
