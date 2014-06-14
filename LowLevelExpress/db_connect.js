var MongoClient = require("mongodb").MongoClient;
function mongoDBConnect () {
	MongoClient.connect('mongodb://localhost:27017/mydb',function(err,db) {
		var collection = db.collection("city");
		collection.insert({
			"name" : "Bali"
		}, function(ferr,fdocs) {
			collection.count(function(err,count) {
				console.log("the Count is "+count);
			})
		});
	});
}
mongoDBConnect();