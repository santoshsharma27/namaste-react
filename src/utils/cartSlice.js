import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // Initialize items as an empty array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item?.card?.info?.id !== action.payload
      );
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item?.card?.info?.id === action.payload
      );

      if (item) {
        item.quantity--; // Decrease quantity
        if (item.quantity <= 0) {
          // If quantity is 0 or less, remove the item from the cart
          state.cart = state.cart.filter(
            (cartItem) => cartItem.card.info.id !== action.payload
          );
        }
      }
    },
    clearCart: (state) => {
      state.cart.length = 0;
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
