import { CDN_URL } from "./utils/constant";

function ItemList({ items }) {
  function addHandler() {
    console.log("Added to cart");
  }

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="py-2">
            <div className="font-semibold">{item.card.info.name}</div>
            <span>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm opacity-40">{item.card.info.description}</p>
          </div>
          <div>
            <img
              className="w-30 h-20 relative rounded-md"
              src={CDN_URL + item?.card?.info?.imageId}
              alt=""
            />
            <div className="px-5">
              <button
                className="px-5 py-1 border text-green-500 font-semibold rounded-md text-center"
                onClick={addHandler}
              >
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
