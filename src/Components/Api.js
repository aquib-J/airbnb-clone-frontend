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

export async function getAllCountry() {
  try {
    let res = await Axios.get(
      `https://airbnb-clone-backend-1.herokuapp.com/api/v1/utils/country`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllState(countryId) {
  try {
    let res = await Axios.get(
      `https://airbnb-clone-backend-1.herokuapp.com/api/v1/utils/state/${countryId}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllCity(stateId) {
  try {
    let res = await Axios.get(
      `https://airbnb-clone-backend-1.herokuapp.com/api/v1/utils/city/${stateId}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function uploadListingImages(data) {
  try {
    let res = await Axios.post(
      `https://airbnb-clone-backend-1.herokuapp.com/api/v1/fileupload/listing`,
      data
    );
    return res.data.locationArray;
  } catch (err) {
    console.log(err);
  }
}

export async function createListing(data) {
  try {
    let res = await Axios.post(
      `https://airbnb-clone-backend-1.herokuapp.com/api/v1/listings`,
      data
    );
    return res.data
  } catch (err) {
    console.log(err);
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

export async function updateUser(userID, params) {
  try {
    // console.log("HERE");
    let res = await Axios.put(
      `https://airbnb-clone-backend-1.herokuapp.com/api/v1/users/${userID}`,
      params
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
