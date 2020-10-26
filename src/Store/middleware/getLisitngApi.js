import Axios from "axios";
import { getListing } from "../getCurrentListing";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== "getCurrentListing") {
    return next(action);
  }
  console.log("Here");
  next(action);
  const id = action.payload;
  let response = await Axios.get(
    `https://airbnb-clone-backend-1.herokuapp.com/api/v1/listings/${id}`
  );
  // console.log(response.data);
  dispatch(getListing(response.data));
};

export default api;
