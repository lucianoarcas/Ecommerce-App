import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      if (state.value >= 2) {
        state.value -= 1
      } else {};
    },
    Add: (state, action) => {
      state.value 
    },
    reset: (state) => {
      state.value = 1;
    },
  },
});

export const {increment, decrement, incrementByAmount, reset} = counterSlice.actions;
export default counterSlice.reducer;