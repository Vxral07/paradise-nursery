import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: {} },
  reducers: {
    addToCart: (state, { payload: product }) => {
      if (!state.items[product.id]) {
        state.items[product.id] = { product, qty: 1 };
      }
    },
    incrementQty: (state, { payload: id }) => {
      state.items[id].qty++;
    },
    decrementQty: (state, { payload: id }) => {
      if (state.items[id].qty > 1) state.items[id].qty--;
    },
    removeItem: (state, { payload: id }) => {
      delete state.items[id];
    }
  }
});

export const { addToCart, incrementQty, decrementQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
