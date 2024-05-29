import { createSlice } from "@reduxjs/toolkit";
const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    isloading: false,
    toastData: {},
    count: 0,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isloading = action.payload;
    },
    setcount: (state, action) => {
      state.count = action.payload;
    },
    showToast: (state, action) => {
      state.toastData = action.payload;
    },
  },
});
export default appConfigSlice.reducer;
export const { setLoading, showToast, setcount } = appConfigSlice.actions;
