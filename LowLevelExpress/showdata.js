var express = require("express");
var router = express.Router();
var fs = require("fs");
var MongoClient = require("mongo").MongoClient;
var mongoose = require("mongoose");

function mongoDBConnect () {
	MongoClient.connect('mongodb://localhost:27017/mydb',function(err,db) {
		if (err){
			return console.dir(err);
		}
		var data = req.body;
		data._id = req.body.firstname + " " + req.body.lastname;
		var collection = db.collection("users");
		collection.insert(data, function(ferr,fdocs) {
			if (err) {
				if(err.code == 11000) {
					err.name = "Invalid user information";
					console.log(err);
					res.render("dberror", err);
				}
			} else {
				data.status = "success";
				res.render("r",data);
			}
			db.close();
		});
	});
}