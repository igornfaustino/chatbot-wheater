const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const processIntent = require("./processIntent");

require("dotenv").config({ path: "variables.env" });
const app = express();

const port = process.env.PORT || 8080;

// MW
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// recive the message and print
app.post("/dialogflow", (req, res) => {
  processIntent(req.body, res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
