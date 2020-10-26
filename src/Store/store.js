import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/getLisitngApi";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), api],
});

export default store;
