import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isUserAuthenticated: false },
  reducers: {
    setUserAuthenticated: (state, action) => {
      const { isUserAuthenticated } = action.payload;
      state.isUserAuthenticated = isUserAuthenticated;
    },
  },
});

export const { setUserAuthenticated } = authSlice.actions;

export default authSlice.reducer;
