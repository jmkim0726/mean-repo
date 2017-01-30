//index.js

var express = require('express');
var app = express();

// 1
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

// 2
app.get("/hello", function(req, res) {
    res.render("hello", {name:req.query.nameQuery});
    });

// 3
app.get("/hello/:nameParam", function(req, res) {
    res.render("hello", {name:req.params.nameParam});
    });

app.listen(3000, function() {
    console.log('Server On!');
    });
