var mongoose = require("mongoose");

var favoriteSchema = new mongoose.Schema({
  //OMDB TITLE & ID NUMBER && IS FAVORITE
  title: {type: String, required: true},
  isFavor: Boolean
});

var Favorite = mongoose.model("favorite", favoriteSchema);
module.exports = Favorite;

//The idea is to SAVE FAVORITES in database, right?