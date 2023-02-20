const mongoose = require("mongoose");

const year = new Date().getFullYear();

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "/images/default.jpg" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: {
    type: Number,
    min: [1673, "Surely not that old?! The first was founded in 1673."],
    max: [year, `Hey, we are in ${year}, this is in the Future!`]
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

module.exports = mongoose.model("Place", placeSchema);
