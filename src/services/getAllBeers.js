import axios from "axios";

export const getAllBeers = () => {
  return axios.get("http://localhost:8000/beers").then((response) => {
    const { data } = response;

    return data;
  });
};
