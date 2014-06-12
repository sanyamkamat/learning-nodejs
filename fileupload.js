var http = require("http");

var server = http.createServer(function(req,res){
	var totalSize = req.headers["content-length"];
	console.log(totalSize);
	var totalDataRcvd = 0;
	req.on("data",function(chunk){
		totalDataRcvd += chunk.length;
		var percent = (totalDataRcvd*100)/totalSize;
		res.write("\nReceived bytes: "+ Math.floor(percent));
		if(totalDataRcvd==totalSize){
			console.log("file received successfully");
		}
	});
	req.on("end", function(){
		res.end("\nSuccessfully received file.");
	});	
});

server.listen(9111);

//curl --upload-file file.txt http://localhost:9111
