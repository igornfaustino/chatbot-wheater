const axios = require("axios");

module.exports = (city, response) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        process.env.OPEN_WEATHER_API
      }`
    )
    .then(res => {
      const { data } = res;
      response.json({
        fulfillmentText: `The weather in ${city} is ${
          data.weather[0].description
        }, and the temperature is ${data.main.temp}°C`
      });
    })
    .catch(ex => {
		console.log(ex)
		response.json({
			fulfillmentText: `Sorry, i couldn't get the weather right now... try again later`
		  });
    });
};
