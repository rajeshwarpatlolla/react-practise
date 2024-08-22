import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'test-count',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export default counterSlice.reducer;
