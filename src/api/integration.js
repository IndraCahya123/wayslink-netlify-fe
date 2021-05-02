import axios from "axios";

export const APIURL = axios.create({
  baseURL: "https://wayslink-be.herokuapp.com/link-api/v1",
});

export const setAuthToken = (token) => {
  if (token) {
    APIURL.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete APIURL.defaults.headers.common["Authorization"];
  }
};