var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mogran = require("morgan"),
  path = require("path");


  app.use(morgan('tiny'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());

  app.use("/css", express.static(path.join(__dirname,'../client/css')));
  app.use("/js", express.static(path.join(__dirname,'../client/json')));
  app.use("/templates", express.static(path.join(__dirname,'../client/js/templates')));



  app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,"../client", "index.html"));
  });

  app.listen(3000, function(){console.log("got it up on 3000");});