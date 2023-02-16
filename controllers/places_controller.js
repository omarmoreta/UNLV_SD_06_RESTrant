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

// GET /places/:id/edit
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id });
  }
});

// GET /places/:id
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render("error404");
  } else {
    res.render("places/Show", { place: places[id], id });
  }
});

// POST /places
router.post("/", (req, res) => {
  if (!req.body.pic) {
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

// PUT /places/:id
router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render("error404");
  } else {
    if (!req.body.pic) {
      req.body.pic = "http://placekitten.com/400/400";
    }
    if (!req.body.city) {
      req.body.city = "Anytown";
    }
    if (!req.body.state) {
      req.body.state = "USA";
    }
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

// DELETE /palces/:id
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

module.exports = router;
