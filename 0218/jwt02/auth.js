const jwt = require("jsonwebtoken");

const config = require("./config");

function auth(req, res, next){
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, config.jwt.secret);
        console.log(decoded);
        next();
    } catch (error) {
        res.status(401).json({
            message: "401 認証できません"
        })
    }
};

module.exports = auth;