const express = require("express");
const { engine } = require('express-handlebars');
const fileUpload = require("express-fileupload");
const app = express();
const mysql = require("mysql");

// connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "image-uploader"
})

const PORT = 5000;

app.use(fileUpload());

app.use(express.static("upload"))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/", (req, res) => {
    // res.render("home");

    pool.getConnection((err, connection) => {
        if (err) throw err;

        console.log("connection to MySQL");

        connection.query("SELECT * FROM image", (err, rows) => {
            connection.release();
            console.log(rows);
            if (!err) {
                res.render("home", { rows })
            }
        })
    })
})

app.post("/", (req, res) => {
    if (!req.files) {
        return res.status(400).send("no files sended")
    }

    let imageFile = req.files.imageFile;
    let uploadPath = __dirname + "/upload/" + imageFile.name;

    // image file path
    imageFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        // res.send("image is uploaded!!")
    });

    // post to MySQL
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`INSERT INTO image VALUES ("", "${imageFile.name}")`,
            (err, rows) => {
                connection.release();
                console.log(rows);
                if (!err) {
                    res.redirect("/");
                } else {
                    {
                        console.log(err)
                    }
                }
            })
    })
})

app.listen(PORT, () => {
    console.log("server is running");
})