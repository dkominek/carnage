// server.js
const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server: server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});