// modules =================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require("path");

// configuration ===========================================


var port = process.env.PORT || 8000;

app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override'));
// app.use(express.static(__dirname + '/public')); 
app.use(express.static(path.join(__dirname, "./", "public")));
app.use("/", express.static(__dirname + "/images"));
// routes ==================================================
require('./app/routes')(app);
var api1 = require("./routes/api1");
app.use("/api1", api1);

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port);