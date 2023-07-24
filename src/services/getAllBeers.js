import axios from "axios";

export const getAllBeers = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/beers`)
    .then((response) => {
      const { data } = response;

      return data;
    });
};
