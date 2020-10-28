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

export async function getUser(userID = 1) {
  try {
    let res = await Axios.get(
      `https://airbnb-clone-backend-1.herokuapp.com/api/v1/users/${userID}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(userID = 1, params) {
  try {
    console.log("HERE");
    let res = await Axios.put(
      `https://airbnb-clone-backend-1.herokuapp.com/api/v1/users/${userID}`,
      params
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
