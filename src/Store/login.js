import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "login/logout",
  initialState: {},
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      localStorage.removeItem("user");
      delete state.currentUser;
    },
  },
});

export const { login, logout } = slice.actions;
export default slice.reducer;
