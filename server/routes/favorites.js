var express = require("express");
var router = express.Router();
var db = require("../models");


// FOR GETTING FAVORITES OUT OF MY DATABASE TO SHOW ON VIEW
router.get("/", function(req,res){
  db.Favorite({}, function(err, favorites){
    if(err){
      res.status(500).send({error:"URG. Nope"});
    } else{
      res.status(200).send(favorites);
    }
  });
});


//ROUTES FOR PINGING OMDB API WILL GO IN ANGULAR SERVICE





module.exports = router;

