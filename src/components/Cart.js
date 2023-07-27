import React from "react";
import EmptyCart from "../ui/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import LinkButton from "../ui/LinkButton";
import ItemList from "./ItemList";
import Button from "../ui/Button";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="mt-5 w-6/12 m-auto">
      <LinkButton to="/">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart</h2>

      <div className="mt-3 divide-y divide-stone-200">
        <ItemList items={cartItems} />
      </div>

      <div className="m-6 space-x-2">
        <Button to="" type="primary">
          Order
        </Button>

        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
