import { combineReducers } from "redux";
import toggleReducer from "./toggle";
import getCurrentListingReducer from "./getCurrentListing";
import setDatesReducer from "./setDates";
import login from "./login";

export default combineReducers({
  toggle: toggleReducer,
  getCurrentListing: getCurrentListingReducer,
  setDates: setDatesReducer,
  user: login,
});
