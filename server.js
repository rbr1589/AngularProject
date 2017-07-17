// To create a http server
var http = require('http');
//use express frame work on node
var express = require('express');
var app = module.exports = express();
//parses the body from the http request and gets the data
var bodyParser = require('body-parser');
//Create a http server
var server = http.createServer(app);

//resolves all the files wrt static directory
app.use(express.static('public_html/public'));

//Listen to the server at the defined port
server.listen("8085", function () {
    console.log("Server is listening on port 8085");
});

//Use the body-parser to get the data of post request on req.body object of the request
app.use(bodyParser.json());
// 1. Connect to MongoDB instance running on localhost
// Connection URL

//Pointing to the mongoDB
var url = 'mongodb://localhost:27017/userData';

var mongoose = require('mongoose');
//assert is used to compare values and throw error based on the comparison
var assert = require('assert');


mongoose.Promise = require('bluebird');

mongoose.connect(url, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

var userDataSchema = new mongoose.Schema({
        userName: String,
        password: String
    });

//userDetail.findOne({name:"Rakshith"},function(err, docs){
//    if(err)
//        throw err;
//    console.log(docs);
//});


//assert.equal(query.exec().constructor, require('bluebird'));

//var userDetailsSchema = mongoose.Schema({
//    "userName" : String,
//    "password" : String
//});

//finds index.html file in the below folder and returns it on pointing to IP:port
app.get('/#', function (req, res) {
    res.sendFile(__dirname + '/public_html/public');
});

//app.post('/logIn', function (req, res) {
//
//    var userName = req.body.userObj.userName;
//    var password = req.body.userObj.password;
//});
