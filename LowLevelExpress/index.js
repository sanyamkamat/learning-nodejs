var express = require("express");
var cons = require("consolidate");
var routes = require("./routes/routes");
var app = express();

app.engine("hbs",cons.handlebars);
app.set("views","views");
app.set("view engine","hbs");
app.use("/", routes);

var server = app.listen(3000, function() {
	console.log("listening " + server.address().port);
});