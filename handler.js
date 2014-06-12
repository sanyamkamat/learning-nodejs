exports.handleRequest = function (req,res){
	console.log("Request received");
	res.writeHead(200);
	res.write("Thank you for accessing");
	res.end();
};