const axios = require("axios");
const openWeatherMapConfig = require("../config/openWeatherMap");

console.log(openWeatherMapConfig);
exports.getWeather = () => {
  return axios.get(
    "http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${openWeatherMapConfig.apikey}"
  ).catch(
    (error) => {console.log(error)});
};

