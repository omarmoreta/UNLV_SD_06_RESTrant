const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.post("/", (req, res) => {
  let reqBody = req.body
  db.Place.create(reqBody)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (let field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        res.render("places/new", { message, reqBody });
      } else {
        res.render("error404");
      }
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
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

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
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
