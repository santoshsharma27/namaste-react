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
    increaseItemQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item?.card?.info?.id === action.payload
      );
      item.quantity++;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item?.card?.info?.id === action.payload
      );

      item.quantity--;

      // if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart: (state) => {
      state.items.length = 0;
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
