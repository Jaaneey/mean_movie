var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/favorite-db");

mongoose.set("debug", true);

module.exports.Favorite = require("./favorite");

