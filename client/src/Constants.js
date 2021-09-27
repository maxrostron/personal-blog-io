/* eslint-disable no-undef */
const prod = {
  url: {
    API_URL: "https://maxrostron-io.herokuapp.com/",
  },
};
const dev = {
  url: {
    API_URL_BACK: "http://localhost:5000",
    API_URL_FRONT: "http://localhost:3000",
  },
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;
