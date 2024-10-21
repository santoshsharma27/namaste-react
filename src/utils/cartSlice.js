import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      // state.cart = state.cart.filter((item) => item.itemId !== action.payload);
      state.items.pop(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0; // []
      // state.cart = [];
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
