import { configureStore } from '@reduxjs/toolkit';
import debitcardSlice from './debitcard-Slice';

const store = configureStore({
  reducer: { debitcard: debitcardSlice.reducer },
});

export default store;
