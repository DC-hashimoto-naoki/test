const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'mysql152.phy.lolipop.lan',
    user: 'LAA1360251',
    password: 'PR15DADB',
    database: 'LAA1360251-cxtnb8'
});

connection.connect();

console.log("1:", connection);

connection.end();