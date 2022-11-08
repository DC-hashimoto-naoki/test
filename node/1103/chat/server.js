const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT;

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket) => {
    console.log('user is logIN');
    socket.on("chat message", (msg)=>{
        // console.log("message=" + msg)
        io.emit("chat message", msg);
    })
})

server.listen(PORT || 3000, ()=>{
    console.log("listening on 3000")
})