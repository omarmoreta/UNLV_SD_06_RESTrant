require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;
const placesController = require("./controllers/places_controller");

app.use("/places", placesController);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
