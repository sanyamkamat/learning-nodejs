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
	var contents = fs.readFileSync(pageName+".html","utf-8");
	res.write(contents);
	res.end();
}