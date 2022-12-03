const express = require('express');
const http = require('http');

const socketIo = require('socket.io');

// 初期化
const app = express();
const server = http.Server(app);
const io = socketIo(server)


const PORT = 3001;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

io.on('connection', (socket) => {
    console.log('connected!');
    socket.on('sendMessage', (message) => {
        console.log('Message has been sent:', message);

        io.emit('receiveMessage', message);
    });
});