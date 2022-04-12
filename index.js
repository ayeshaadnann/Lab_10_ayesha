const mongoose = require ("mongoose");


require("dotenv").config();


const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once ("open", () => {
console.log ("Successfully connected to MongoDB using Mongoose!");
});