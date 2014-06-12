exports.handleRequest = function (req,res){
	console.log(req.url);
	switch (req.url){
		case "/":
			console.log("demo");
			res.end("correct");
			break;
		default:
			res.end("Incorrect url!");		
	}	
};