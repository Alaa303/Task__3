

const { error } = require("console");
const request = require("request");

const geocode = (countryName, callback) => {
  const geocodeUrl =
    "http://api.weatherstack.com/current?access_key=86babe6b593f99c6f7d051dc2ccc5919&query=" + countryName;
  request({ url : geocodeUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect geocode service", undefined);
    }
     else if (response.body.message) {
      callback(response.body.message, undefined);
    } 
    else {
      callback(undefined, {
        longtitude: response.body.location.lon,
        latitude: response.body.location.lat,
        weather : response.body.current.weather_descriptions[0],
        temperature : response.body.current.temperature
      });
    }
  });
};

module.exports = {
    x : geocode
}
