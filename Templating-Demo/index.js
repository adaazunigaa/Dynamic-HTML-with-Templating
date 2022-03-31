const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    //res.send("Hello! \n  <h1>This is the 'HOME' page</h1> ");
    res.render("home.ejs");
})

app.get("/rand", (req,res) => {
    const num = Math.floor(Math.random()* 10) + 1;
    res.render("random.ejs", {randomNum: num});
});

app.listen(3000, () => {
    console.log("Listening on port 3000!");
});