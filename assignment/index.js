var handlebars = require("handlebars");
var fs = require("fs");
var nconf = require("nconf");

var config = nconf.file("config.json");
exports.showPage= (function(pageUrl,res) {
	console.log(pageUrl);
	switch (pageUrl){
		case "/aboutus":
			res.end(pageRender("aboutus"));
			break;
		case "/chat":
			res.end(pageRender("chat"));
			break;
		case "/history":
			res.end(pageRender("history"));
			break;
		case "/logout":
			res.end(pageRender("logout"));
			break;
		case "/register":
			res.end(pageRender("register"));
			break;		
		case "/":
			res.end(pageRender("welcome"));
			break;
		default:			
			res.end(pageRender("errorpage"));
			break;
	}
});
function pageRender (pageName) {
	var template = fs.readFileSync(config.get(pageName), "utf-8");
	var pageBuilder = handlebars.compile(template);
	return pageBuilder();;
}