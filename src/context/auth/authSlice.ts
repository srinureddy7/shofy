import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import type { RootState } from "../context/store";?

export interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
// Action creators are generated for each case reducer function.
export const { increment, decrement } = counterSlice.actions;

// Selector
export const selectValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

// export default counterSlice.reducer
