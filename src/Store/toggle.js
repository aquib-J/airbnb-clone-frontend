import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "toggleLoginModal",
  initialState: {},
  reducers: {
    toggleModal: (modal, action) => {
      if (modal.isOpen) {
        modal.isOpen = false;
      } else {
        modal.isOpen = true;
      }
    },
  },
});

export const { toggleModal } = slice.actions;
export default slice.reducer;
