var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  res.end('Welcome to Node!');
});

server.listen(port, hostname, function() {
  console.log("Server running at " + hostname + ":" + port);
});