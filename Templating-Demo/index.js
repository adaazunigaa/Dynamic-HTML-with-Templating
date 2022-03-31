const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    //res.send("Hello! \n  <h1>This is the 'HOME' page</h1> ");
    res.render("home.ejs");
})




app.listen(3000, () => {
    console.log("Listening on port 3000!");
});