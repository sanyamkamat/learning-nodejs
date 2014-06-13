var http = require("http");
var handlebars = require("handlebars");
var fs = require("fs");

var server = http.createServer(function(req,res){
	var template = fs.readFileSync("./hbs.html", "utf-8");
	var pageBuilder = handlebars.compile(template);
	var output = pageBuilder({title:"hi","body":"This is the Body part","footer":"This footer section"});
	res.end(output);
});

server.listen(9000);