const express = require("express");
const router = express.Router();

// router.use(myLogger);

router.get("/", myLogger, (req,res) => {
    res.send("user !!")
});
router.get("/info", (req,res) => {
    res.send("info!!")
});

router.get("/:id", (req, res) => {
    res.send(`${req.params.id}のユーザーです`);
})

// middle wear
function myLogger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;