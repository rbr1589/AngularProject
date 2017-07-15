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
var url = 'mongodb://127.0.0.1:27017/data';

var mongoose = require('mongoose');
//assert is used to compare values and throw error based on the comparison
var assert = require('assert');






mongoose.connect('mongodb://localhost/userData', {
  useMongoClient: true,
  /* other options */
}).then(function(db){
//    console.log(db);
    var userDataSchema = mongoose.Schema({
        userName: String,
        password: String
    });
    var userDetail = db.model('userDetail', userDataSchema);
    
//    var checkUser = new userDataSchema({userName:"Rakshith"});
    
    
    userDetail.find(function (err, kittens) {
        if (err)
            return console.error(err);
        console.log(kittens);
    })
    
    
},function(err){
console.log(err);
});
























var userDetailsSchema = mongoose.Schema({
    "userName" : String,
    "password" : String
});

//finds index.html file in the below folder and returns it on pointing to IP:port
app.get('/#', function (req, res) {
    res.sendFile(__dirname + '/public_html/public');
});

app.post('/logIn', function (req, res) {

    var userName = req.body.userObj.userName;
    var password = req.body.userObj.password;
});
