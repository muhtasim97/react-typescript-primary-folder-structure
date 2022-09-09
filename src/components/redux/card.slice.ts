import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  cart: Array<any>;
}
const initialState: CartState = {
  cart: [],
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    backToInitialCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCart, backToInitialCart } = cardSlice.actions;
export default cardSlice.reducer;
