import Axios from "axios";

export async function getListings(cityName) {
  try {
    let res = await Axios.get(
      `https://airbnb-clone-backend-1.herokuapp.com/api/v1/listings/search?city=${cityName}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
