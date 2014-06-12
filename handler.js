var fs = require("fs");

exports.handleRequest = function (req,res){
	console.log(req.url);
	switch (req.url){
		case "/":
			console.log("demo");
			renderPage("index",res);
			res.end("correct");
			break;
		default:
			renderPage("error",res);
			res.end("Incorrect url!");		
	}	
};

function renderPage(pageName,res){
	var contents = 
		fs.readFile(pageName+".html",function(err,data){
			if(undefined == err){
				res.writeHead(200);
				res.end(data);
			} else {
				res.writeHead(500);
				res.end("Error occured while serving the files");
			}
		});
}