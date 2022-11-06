const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

connection.query("CREATE DATABASE youtube;", (err)=>{
    console.log("1:", err);
});

connection.query("CREATE TABLE youtube.testData(id int, name VARCHAR(12)) ;", (err)=>{
    console.log("2:", err);
})

connection.query("INSERT youtube.testData VALUE(1, 'aaa');", (err)=>{
    console.log("3:", err);
})

connection.query("SELECT * FROM youtube.testData;", (err, result)=> {
    console.log("4:", err, result);
    connection.end();
})