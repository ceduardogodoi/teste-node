var http = require('http');

var server = http.createServer(function(req, res) {
    res.end("<html><body><h1>Listando os produtos</h1></body></html>");
});
server.listen(3000);

console.log("servidor ta rodando");

// curso parou em 6:23
