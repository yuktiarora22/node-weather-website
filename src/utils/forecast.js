const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/3ec6c3e3e9a30a2956bfcf573623214c/${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      const currentlyForecast = body.currently;
      const dailyForecast = body.daily.data[0];
      callback(
        undefined,
        `${dailyForecast.summary} It is currently ${currentlyForecast.temperature} degrees out. There is a ${currentlyForecast.precipProbability}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
