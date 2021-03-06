const { publicDecrypt } = require("crypto");
const { json } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const { exitCode } = require("process");
const { cachedDataVersionTag } = require("v8");
const redditData = require("./data.json")

app.use(express.static(path.join(__dirname, "public")));
    // EX:
    //     public
    //         /CSS
    //         /json
    //         /img
    //         /etc..

    // OR EX:
    //         CSS
    //         JSON

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    //res.send("Hello! \n  <h1>This is the 'HOME' page</h1> ");
    res.render("home.ejs");
});

app.get("/cats", (req, res) => {
    const cats = [
        "Blue", "Rocket", "Monty", "Stephanie", "winston"
    ];
    res.render("cats.ejs", { cats });
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];

    if (data) {
        res.render("subreddit.ejs", { ...data });
    }else{
        res.render("notFound.ejs", {subreddit})
    }

});

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random.ejs", { randomNum: num });
});

app.listen(3000, () => {
    console.log("Listening on port 3000!");
});