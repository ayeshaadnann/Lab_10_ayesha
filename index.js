const mongoose = require ("mongoose");


require("dotenv").config();
const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
console.log ("Successfully connected to MongoDB using Mongoose!");
});
const express = require("express"), 
app=express(),
homeController= require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
express.urlencoded({
    extended: false
})
);
app.get('/home', (req,res)=>{
    res.render('home')
});
app.get("/views/:ejs", homeController.respondwithimage);

app.listen(app.get("port"), ()=>{
    console.log(`Server running at http://localhost:${app.get("port")}`);
});