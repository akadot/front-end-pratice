const axios = require("axios");

export default function getApi(name) {
  axios
    .get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(function (response) {
      console.log(response.data[0].name);
    })
    .catch(function (error) {
      console.log(error);
    });
}
