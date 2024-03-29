const express = require("express");
const app = express();
const PORT = 5000;
const auth = require("./routes/auth");

app.use(express.json());
app.use("/auth", auth);

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.listen(PORT, () => {
    console.log("server is running");
});