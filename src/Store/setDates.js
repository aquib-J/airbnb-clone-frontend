import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "setDates",
  initialState: {},
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setStartDate, setEndDate, setGuests, setCity } = slice.actions;
export default slice.reducer;
