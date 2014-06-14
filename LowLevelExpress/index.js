var express = require("express");
var app = express();
var routes = require("./routes/routes");

/*
app.get("/",function(req,res) {
	res.send("Thank You");
});*/
app.use("/",routes);
app.listen(3000);