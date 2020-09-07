var express = require('express');
// var path = require('path');
var app = express();
var cors = require('cors');
var ip = require("ip");
var server = require("http").createServer(app);// use the server that app create for us
var io = require("socket.io").listen(server);//we just need to identify the path!!! client will connect here(server)
var PORT = 3000;
server.listen(PORT);

console.log("Port " + PORT + " is running");

app.use(cors());
app.get('/', (req, res) => {
    res.send('Runing for real-time feature');
})

const connections = [];

io.sockets.on("connection", socket => {
    connections.push(socket);
    console.log(" %s sockets is connected", connections.length);

    var clientIp = socket.request.connection.remoteAddress;
    console.log('New connection from ' + clientIp);

    socket.on("disconnect", () => {
        connections.splice(connections.indexOf(socket), 1);
    });

    socket.on('save-message', function (data) {
        console.log(data);
        io.emit('new-message', { message: data });
    });
});