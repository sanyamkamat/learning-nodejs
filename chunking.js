var http = require("http");

var server = http.createServer(function(req,res){
	res.writeHead(200)
	res.write("Waiting for 5 seconds....\n");
	setInterval(function(){
		res.write("Request\n");
		//res.end();
	},1000);
});

server.listen(9000);