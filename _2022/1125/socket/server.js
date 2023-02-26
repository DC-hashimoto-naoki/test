const http = require('http').createServer(handler);
const html = require('fs').readFileSync('views/index.html');

const io = require('socket.io')(http);



function handler(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(html);
}

http.listen(3001);

io.on('connection', function(socket){
    socket.on('chat', function(msg){
        io.emit('chat', msg);
    })
})