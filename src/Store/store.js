import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/getLisitngApi";
import reducer from "./reducer";

let initialState = {
  user: JSON.parse(localStorage.getItem("user"))
    ? { currentUser: JSON.parse(localStorage.getItem("user")) }
    : {},
};

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), api],
  preloadedState: initialState,
});

export default store;
