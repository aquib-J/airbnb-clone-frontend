import { combineReducers } from "redux";
import toggleReducer from "./toggle";
import getCurrentListingReducer from "./getCurrentListing";
import setDatesReducer from "./setDates";

export default combineReducers({
  toggle: toggleReducer,
  getCurrentListing: getCurrentListingReducer,
  setDates: setDatesReducer,
});
