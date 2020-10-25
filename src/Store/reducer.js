import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "toggleLoginModal",
  initialState: false,
  reducers: {
    toggleModal: (isOpen, action) => {
      if (isOpen) {
        return false;
      } else {
        return true;
      }
    },
  },
});

export const { toggleModal } = slice.actions;
export default slice.reducer;
