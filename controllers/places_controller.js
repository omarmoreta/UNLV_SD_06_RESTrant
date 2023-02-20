const router = require("express").Router();
const db = require("../models");

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
    res.status(200).redirect("/places");
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

router.get("/new", (req, res) => {
  res.status(200).render("places/new");
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

router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

router.post("/:id/comment", async (req, res) => {
  console.log(req.body);
  req.body.rant = req.body.rant ? true : false;
  try {
    let place = await db.Place.findById(req.params.id);
    place.save()
    console.log({ place });
    try {
      let comment = await db.Comment.create(req.body);
      console.log({ comment });
      res.status(200).redirect(`/places/${req.params.id}`);
    } catch (err) {
      console.log(err);
      res.status(404).render("error404");
    }
  } catch (err) {
    console.log(err);
    res.status(404).render("error404");
  }
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

// // GET /places
// router.get("/", (req, res) => {
//   res.status(200).render("places/Index", { places });
// });

// // GET /places/new
// router.get("/new", (req, res) => {
//   res.render("places/New");
// });

// // GET /places/:id/edit
// router.get("/:id/edit", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id) || !places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/edit", { place: places[id], id });
//   }
// });

// // GET /places/:id
// router.get("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id) || !places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/Show", { place: places[id], id });
//   }
// });

// // POST /places
// router.post("/", (req, res) => {
//   if (!req.body.pic) {
//     req.body.pic = "/images/default.jpg";
//   }
//   if (!req.body.city) {
//     req.body.city = "Anytown";
//   }
//   if (!req.body.state) {
//     req.body.state = "USA";
//   }
//   places.push(req.body);
//   res.redirect("/places");
// });

// // PUT /places/:id
// router.put("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id) || !places[id]) {
//     res.render("error404");
//   } else {
//     if (!req.body.pic) {
//       req.body.pic = "http://placekitten.com/400/400";
//     }
//     if (!req.body.city) {
//       req.body.city = "Anytown";
//     }
//     if (!req.body.state) {
//       req.body.state = "USA";
//     }
//     places[id] = req.body;
//     res.redirect(`/places/${id}`);
//   }
// });

// // DELETE /palces/:id
// router.delete("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id) || !places[id]) {
//     res.render("error404");
//   } else {
//     places.splice(id, 1);
//     res.redirect("/places");
//   }
// });

module.exports = router;
