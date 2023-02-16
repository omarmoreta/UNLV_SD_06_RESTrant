const router = require("express").Router();
const places = require("../models/places.js");

// GET /places
router.get("/", (req, res) => {
  res.status(200).render("places/Index", { places });
});

// GET /places/new
router.get("/new", (req, res) => {
  res.render("places/New");
});

// GET /places/:id
// router.get("/:id", (req, res) => {

//   res.render("")
// })

// POST /places
router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "/images/default.jpg";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

module.exports = router;
