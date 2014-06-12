var http = require("http");
var handler = require("./handler.js");
var myModule = require("./myModule");
var Server =  http.createServer(handler.handleRequest);

myModule.customPrint();

Server.listen(9090);
