import axios from 'axios';
const baseUrl = "http://localhost:5000";

export const fetchDataFromApi = async()=> {

  return axios({
    method: 'GET',
    url: `${baseUrl}/users`,
    responseType: 'stream'
  })
    .then(function (response) {
        
        return  response.data;
    });
    // console.log("data",data);
    // return data;
}