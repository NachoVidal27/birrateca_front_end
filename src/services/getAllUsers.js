import axios from "axios";

export const getAllUsers = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/users`)
    .then((response) => {
      const { data } = response;

      return data;
    });
};
