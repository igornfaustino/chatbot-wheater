const weather = require("./intents/weather");

module.exports = (body, res) => {
  const { name } = body.queryResult.intent;
  if (
    name ==
    "projects/weather-9d4b6/agent/intents/9f66cbf1-5449-4a73-9ea9-386b223fec7b"
  ) {
    return weather(body.queryResult.parameters['geo-city'], res)
  }
};
