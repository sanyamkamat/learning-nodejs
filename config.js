var http = require("http");
var nconf = require("nconf");

var config = nconf.file("config.json");
var server = http.createServer(function(req,res) {
	res.end("Hello World!");
});
server.listen(config.get("httpport"));