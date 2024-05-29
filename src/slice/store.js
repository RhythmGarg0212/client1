import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./appConfigSlice";
import { expenseSlice } from "../store/reducer";
import apiSlice from "../store/apiSlice";

const store = configureStore({
  reducer: {
    appConfigReducer,
    expense: expenseSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;