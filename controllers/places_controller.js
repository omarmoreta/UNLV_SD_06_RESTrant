const router = require("express").Router();
const db = require("../models");

router.get("/new", (req, res) => {
  res.status(200).render("places/new");
});

router.get("/", async (req, res) => {
  try {
    const places = await db.Place.find();
    res.status(200).render("places/index", { places });
  } catch (err) {
    console.log(err);
    res.status(404).render("error404");
  }
});

router.post("/", async (req, res) => {
  let body = req.body;
  try {
    if (!body.pic) {
      body.pic = undefined;
    }
    if (!body.state) {
      body.state = undefined;
    }
    if (!body.city) {
      body.city = undefined;
    }
    await db.Place.create(body);
    res.status(302).redirect("/places");
  } catch (err) {
    if (err && err.name == "ValidationError") {
      console.log(err.erros);
      let message = "Validation Error: ";
      res.status(404).render("places/new", { message, body });
    } else {
      res.status(404).render("error404");
    }
  }
});

router.get("/:id/edit", async (req, res) => {
  try {
    let place = await db.Place.findById(req.params.id);
    res.status(201).render("places/edit", { place });
  } catch (err) {
    console.log(err);
    res.status(404).render("error404");
  }
});

router.get("/:id", async (req, res) => {
  try {
    let place = await db.Place.findById(req.params.id).populate("comments");
    res.status(200).render("places/show", { place });
  } catch (err) {
    console.log("err", err);
    res.status(404).render("error404");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await db.Place.findByIdAndUpdate(req.params.id, req.body);
    res.status(410).redirect(`/places/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.status(404).render("error404");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let place = await db.Place.findById(req.params.id);
    if (place.comments.length) {
      for (let i = 0; i < place.comments.length; i++) {
        await db.Comment.findByIdAndDelete(place.comments[i]);
        // place.comments.pull(place.comments[i]);
        // await place.save();
      }
    }
    await db.Place.findByIdAndDelete(req.params.id);
    res.status(410).redirect("/places");
  } catch (err) {
    console.log("err", err);
    res.status(404).render("error404");
  }
});

router.post("/:id/comment", async (req, res) => {
  let body = req.body;
  if (body.author === "") {
    body.author = undefined;
  }
  body.rant = body.rant ? true : false;
  try {
    let place = await db.Place.findById(req.params.id);
    try {
      let comment = await db.Comment.create(body);
      place.comments.push(comment._id);
      await place.save();
      res.status(302).redirect(`/places/${req.params.id}`);
    } catch (err) {
      console.log(err);
      res.status(404).render("error404");
    }
  } catch (err) {
    console.log(err);
    res.status(404).render("error404");
  }
});

router.delete("/:id/comment/:commentId", async (req, res) => {
  try {
    await db.Comment.findByIdAndDelete(req.params.commentId);
    let place = await db.Place.findById(req.params.id);
    place.comments.pull(`${req.params.commentId}`);
    place.save();
    res.status(410).redirect(`/places/${req.params.id}`);
  } catch (err) {
    console.log("err", err);
    res.status(404).render("error404");
  }
});

module.exports = router;
