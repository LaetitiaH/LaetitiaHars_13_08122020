import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../utils/models/user.model";

const initialState: User = {
  email: "",
  firstName: "",
  id: "",
  lastName: "",
  createdAt: "",
  uptadedAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
    removeUser: () => initialState,
    updateUser: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const { setUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
