import axios from "axios";
const baseUrl = "http://localhost:5000";

export const fetchDataFromApi = async () => {
  return axios({
    method: "GET",
    url: `${baseUrl}/users`,
    responseType: "stream",
  }).then(function (response) {
    console.log("responsesdsds", response);
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
export const loginRequest = async (data) => {
  let result = fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
  return result;
  // try {
  //   let result = await axios.post(
  //     // any call like get
  //     "http://localhost:5000/login", // your URL
  //     {
  //       // data if post, put
  //       name: data.name,
  //       password: data.password,
  //     }
  //   );
  //   console.log("result.data", result.data);
  //   return result;
  // } catch (error) {
  //   console.error(error.response.data); // NOTE - use "error.response.data` (not "error")
  // }
};
