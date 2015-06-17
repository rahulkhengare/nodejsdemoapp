var http = require('http')
var port = process.env.PORT || 443;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('nodejs app CI demo in Azure \n');
    }).listen(port);
