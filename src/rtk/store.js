import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/Products-reducer";
import cartReducer from "./Reducers/cart-reducer";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
