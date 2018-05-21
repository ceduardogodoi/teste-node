var http = require('http');
var porta = 3000;
var ip = "localhost";

var server = http.createServer(function(req, res) {
    if (req.url == "/produtos") {
        res.end("<html><body><h1>Request recebido!</h1></body></html>");
    } else {
        res.end("<html><body><h1>Home da Casa do Código</h1></body></html>");
    }
}).listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");
