import { configureStore } from '@reduxjs/toolkit';
import { default as products } from './components/redux/CardTable.slice';
import cardReducer from '././components/redux/card.slice'

const store = configureStore({
  reducer: { products , card: cardReducer},
 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
