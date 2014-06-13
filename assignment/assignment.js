var http = require("http");
var assignment = require("./index.js");
var nconf = require("nconf");

var config = nconf.file("config.json");
var server = http.createServer(function(req,res) {
	console.log(req.url);
	assignment.showPage(req.url,res);
	//assignment.showPage(req.url);
});
 
server.listen(config.get("httpport"));