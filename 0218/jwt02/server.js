const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const config = require("./config");
const auth = require("./auth");

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("JWT tutorial");
});

app.post("/register", (req, res)=> {
    const email = req.body.email;
    const password = req.body.password;
    const payload = {
        email: email,
        password: password
    };

    const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

    const body = {
        email: email,
        password: password,
        token: token
    };

    res.status(200).json(body);
});

app.get("/login", auth, (req, res)=>{

    res.status(200).json({
        message: "login success!"
    })
})

const PORT = 3000;
app.listen(PORT, console.log("server is running"));