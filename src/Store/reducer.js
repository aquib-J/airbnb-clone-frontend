import { combineReducers } from "redux";
import toggleReducer from "./toggle";
import getCurrentListingReducer from "./getCurrentListing";

export default combineReducers({
  toggle: toggleReducer,
  getCurrentListing: getCurrentListingReducer,
});
