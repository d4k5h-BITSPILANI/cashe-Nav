import {createSlice} from '@reduxjs/toolkit';

const operationSlice = createSlice({
  name: 'operation',
  initialState: {
    value: 0,
  },
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
    addByAmount: (state, action) => {
      state.value += action.payload;
    },
    multiplyByAmount: (state, action) => {
      state.value *= action.payload;
    },
    divideByAmount: (state, action) => {
      state.value /= action.payload;
    },
    subtractByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {
  multiplyByAmount,
  setInputValue,
  divideByAmount,
  addByAmount,
  subtractByAmount,
} = operationSlice.actions;

export default operationSlice.reducer;
