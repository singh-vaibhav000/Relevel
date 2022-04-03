const expressApp = require('./app');
const http = require('http');

const server = http.createServer(expressApp);

server.listen(3001, (req, res) => {
    console.log("Server Listening");
})