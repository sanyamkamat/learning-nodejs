var http = require("http");

var server = http.createServer(function(req,res){
	res.writeHead(200)
	res.write("Waiting for 5 seconds....\n");
	setTimeout(function(){
		res.write("Wait is over....\n");
		res.write("Done\n");
		res.end();
	},5000);
});

server.listen(9000);