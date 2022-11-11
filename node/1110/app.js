const express = require("express");
app = express();

const bodyParser = require("body-parser");

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/new", (req, res) => {
    res.render("new");
});

app.post("/create", (req, res) => {
    res.send(req.body.username);
})


app.listen(8080);
console.log("server listening...")