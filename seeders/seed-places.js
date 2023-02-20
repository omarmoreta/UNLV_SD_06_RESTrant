const db = require("../models");

db.Place.create([
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/hthaiml.jpg",
    founded: 1985,
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "/images/cafe.jpg",
    founded: 2001,
  },
  {
    name: "Diner 55",
    city: "Mobile",
    state: "AL",
    cuisines: "Breakfast, BBQ",
    pic: "/images/burger.jpg",
    founded: 1955,
  },
  {
    name: "King Tea",
    city: "New York",
    state: "NY",
    cuisines: "Tea, Bakery",
    pic: "/images/default.jpg",
    founded: 1999,
  },
])
  .then(() => {
    console.log("Seeder data Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Seeder data Failure!", err);
    process.exit();
  });
