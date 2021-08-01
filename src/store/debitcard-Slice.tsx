import { createSlice } from '@reduxjs/toolkit';
import StoreModal from '../models/StoreModal';
const debitcardSlice = createSlice({
  name: 'Debit-card',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addAmountToCard(state: any, action: any) {
      const newItem = action.payload;
        state.items.push({
          name:newItem.name,
          cardNumber: newItem.cardNumber,
          ex_date: newItem.ex_date,
          cvv: newItem.cvv,
          amount: newItem.amount,
          type: 'Credited'
        });
     
    },
    withdrawamountTocard(state: any, action:any) {
      const newItem = action.payload;
        state.items.push({
          name:newItem.name,
          cardNumber: newItem.cardNumber,
          ex_date: newItem.ex_date,
          cvv: newItem.cvv,
          amount: newItem.amount,
          type: 'Debited'
        });
    },
  },
});

export const debitCardActions = debitcardSlice.actions;

export default debitcardSlice;