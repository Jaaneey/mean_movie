var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mogran = require("morgan"),
  path = require("path");



  app.get('/', function(req,res){
    res.send("Check Server");
  });

  app.listen(3000, function(){console.log("got it up on 3000");});