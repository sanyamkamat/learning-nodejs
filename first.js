var http = require("http");

var Server =  http.createServer(function(req,res){
	console.log("Request received");
	res.writeHead(200);
	res.write("Thank you for accessing");
	res.end();
});

Server.listen(9000);