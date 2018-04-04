var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var firstSchema = mongoose.Schema({

    keyword: String,
    imageArray: Array,
});

mongoose.connect("mongodb://localhost:27017/scraperdb", function(err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Connected to the scraperdb database");
    }
});

module.exports = mongoose.model("firstcollection", firstSchema);