import axios from "axios";
const baseUrl = "http://localhost:5000";

export const fetchDataFromApi = async () => {
  return axios({
    method: "GET",
    url: `${baseUrl}/users`,
    responseType: "stream",
  }).then(function (response) {
    return response.data;
  });
};
export const deleteDatafromApi = async (id) => {
  console.log("id", id);
  return axios({
    method: "DELETE",
    url: `${baseUrl}/users/${id}`,
    responseType: "stream",
  }).then(function (response) {
    return response.data;
  });
};
