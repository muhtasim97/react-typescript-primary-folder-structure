import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import bmw1 from '../../images/bmw1.jpg';
import bmw2 from '../../images/bmw2.jpg';
import mercedes from '../../images/mercedes.jpg';
import { RootState } from '../../store';

export interface Product {
  name?: string;
  image?: string;
  price?: string;
}

const initialState: Product[] = [
  {
    image: bmw1,
    name: 'BMW 8 Series',
    price: '$100000',
  },
  {
    image: bmw2,
    name: 'BMW 7 Series',
    price: '$100000',
  },
  {
    image: mercedes,
    name: 'Mercedes CLI',
    price: '$100000',
  },
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    showProduct: (state: any, action: PayloadAction<Product>) => {
      return [...state, action.payload];
    },
  },
});

export const getProductsSelector = (state: RootState) => state.products;

export const { showProduct } = productSlice.actions;
export default productSlice.reducer;
