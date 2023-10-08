import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subTotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};

export const customCardReducer = createReducer(initialState, {
  addToCart: (state, action) => {
    const item = action.payload;
    const isItemExist = state.cartItems.find((i) => i.id === item.id);

    if (isItemExist) {
      state.cartItems.forEach((i) => {
        if (i.id === item.id) {
          i.quantity += 1;
        }
      });
    } else {
      state.cartItems.push(item);
    }
  },

  decrement: (state, action) => {
    const id = action.payload;
    const isItemExist = state.cartItems.find((i) => i.id === id);

    if (isItemExist.quantity > 1) {
      state.cartItems.forEach((i) => {
        if (i.id === id) {
          i.quantity -= 1;
        }
      });
    }
  },

  deleteHandler: (state, action) => {
    const id = action.payload;
    state.cartItems = state.cartItems.filter((i) => i.id !== id);
  },

  calculatePrice: (state) => {
    const subTotal = state.cartItems.reduce((acc, item) => {
      return (acc += item.price * item.quantity);
    }, 0);
    state.subTotal = subTotal;
    state.tax = subTotal * 0.1;
    state.shipping = subTotal > 1000 ? 0 : subTotal * 0.05;
    state.total = subTotal + state.tax + state.shipping;
  },
});
