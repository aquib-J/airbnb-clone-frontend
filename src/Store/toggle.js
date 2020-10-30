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
    toggleConfirmation: (modal, action) => {
      if (modal.confirmOpen) {
        modal.confirmOpen = false;
      } else {
        modal.confirmOpen = true;
      }
    },
  },
});

export const { toggleModal, toggleConfirmation } = slice.actions;
export default slice.reducer;
