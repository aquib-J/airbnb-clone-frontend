import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "getCurrentListing",
  initialState: {},
  reducers: {
    getListing: (currentListing, action) => {
      return action.payload;
    },
  },
});

export const { getListing } = slice.actions;
export default slice.reducer;
