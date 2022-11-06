const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");


// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req,res)=> {
    // res.send("<h1>konchiwa</h1>");
    // res.sendStatus(404)
    // res.status(500).send("error!!!")
    // res.status(500).json({ msg: "error!!"})
    res.render("index", {text: "Node.js and Express"})
})

// routing
app.use("/user", userRouter);



app.listen( PORT, () => {
    console.log("server is running!")
})