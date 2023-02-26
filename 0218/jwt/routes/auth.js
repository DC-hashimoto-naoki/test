const router = require("express").Router();
const { body, validationResult } = require('express-validator');
const { User } = require('../db/User');
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

router.get("/", (req, res) => {
    res.send("auth.js")
});

router.post(
    "/register",
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const user = User.find((user) => user.email === email);
        if (user) {
            return res.status(400).json([{
                message: "user is already exist"
            }])
        }

        // PW hash
        let hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword);

        // DB save
        User.push({
            email: email,
            password: hashedPassword
        });

        // JWT
        const token = await JWT.sign(
            {
                email,
            },
            "SECRET_KEY",
            {
                expiresIn: "24h"
            }
        );

        return res.json({
            token: token,
        })
    })

// DB
router.get('/allUsers', (req, res) => {
    res.json(User);
})

module.exports = router;