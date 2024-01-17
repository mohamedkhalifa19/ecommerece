import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartLength: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      const target = state.find((p) => p.id === action.payload.id);
      if (target) {
        target.quantity += 1;
        return state;
      }
      action.payload.quantity = 1;
      return [...state, action.payload];
    },
    getProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToCart, getProducts, cartLength } = cartSlice.actions;
export default cartSlice.reducer;
