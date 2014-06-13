var ws = require("ws");
var WebSocketServer = ws.Server;

wss = new WebSocketServer({
	port: 9090
});
var wsconns = [];
var i =0;
wss.on('connection',function(ws) {
	console.log("new user connected");
	wsconns[i++]=ws;
	ws.on('message',function (message) {
		console.log("received: %s", message);
		for (var i = 0; i < wsconns.length; i++) {
			wsconns[i].send(message);
		}
	});
});