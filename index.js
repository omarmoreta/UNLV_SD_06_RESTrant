require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const placesController = require("./controllers/places_controller");
const createViewsEngine = require("express-react-views").createEngine();

app.set("view engine", "jsx");
app.engine("jsx", createViewsEngine);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/places", placesController);

app.get("/", (req, res) => {
  res.status(200).render("Home");
});

app.get("*", (req, res) => {
  res.status(404).render("Error404");
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
