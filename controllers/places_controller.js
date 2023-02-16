const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/hthaiml.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/cafe.jpg",
    },
  ];

  res.status(200).render("places/Index", { places });
});

// GET /places/new
router.get("/new", (req, res) => {
  res.render("/places/New")
})

// GET /places/:id
router.get("/:id", (req, res) => {

  res.render("")
})

// POST /places
router.post("/", (req, res) => {

})

module.exports = router;
