import { configureStore } from "@reduxjs/toolkit";
import { customCardReducer } from "./Reducers";

const Store = configureStore({
  reducer: {
    // Reducers
    cart: customCardReducer,
  },
});

export default Store;
