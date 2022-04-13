const mongoose = require("mongoose"),
bookSchema = mongoose.Schema({
    name: String, 
    author: String,
    Link: String
});
module.exports = mongoose.model("books", bookSchema);


