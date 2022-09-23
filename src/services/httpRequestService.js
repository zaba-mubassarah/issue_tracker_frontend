import axios from "axios";
const baseUrl = "http://localhost:5000";

export const fetchDataFromApi = async () => {
  return axios({
    method: "GET",
    url: `${baseUrl}/users`,
  }).then(function (response) {
    return response.data;
  });
};
export const saveData = async (data) => {
  console.log("data", data);

  return axios({
    method: "POST",
    url: `${baseUrl}/users`,
    data: data,
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
