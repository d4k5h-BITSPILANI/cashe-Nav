import {configureStore} from '@reduxjs/toolkit';
import operationReducer from './operationSlice';

export const store = configureStore({
  reducer: {
    counter: operationReducer,
  },
});
