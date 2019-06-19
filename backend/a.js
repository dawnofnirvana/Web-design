const express = require('express');//requires express and uses the express variable to represent it
const app = express();//initialize express server
var fs = require("fs");
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/listUsers', function (req, res) {
fs.readFile( __dirname + "/" + "db.json", 'utf8', function (err, data) {
console.log( data );
res.send( data );
});
})//get all users
var user = {
"user4" : {
"name" : "mohit",
"password" : "password4",
"profession" : "teacher",
"id": 4
}
}
app.get('/User/:id', function (req, res) {
// First read existing users.
fs.readFile( __dirname + "/" + "db.json", 'utf8', function (err, data) {
var users = JSON.parse( data );
var user = users["user" + req.params.id] 
console.log( user );
res.send( user);
// alert(user);
});
})// get user by uerid



app.post('/addUser', function (req, res) {
// First read existing users.
fs.readFile( __dirname + "/" + "db.json", 'utf8', function (err, data) {
data = JSON.parse( data );
data["user4"] = user["user4"];
console.log( data );
res.end( JSON.stringify(data));
});
})//add user

app.delete('/deleteUser', function (req, res) {
// First read existing users.
fs.readFile( __dirname + "/" + "db.json", 'utf8', function (err, data) {
data = JSON.parse( data );
delete data["user" + 2];
console.log( data );
res.end( JSON.stringify(data));
});
})//delete user by id
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://127.0.0.1:8081")
})
app.get('/', function (req, res) {
res.send('Welcome to Marvel.')
})

app.listen(3000, function () {
console.log('Taks planner app service listening on port 3000!')
})

var mongoose = require('mongoose');
//设置mongo存储路径
var DB_URL = 'mongodb://localhost:27017/marvel';

//连接数据库
mongoose.connect(DB_URL);

//连接成功后输出语句
mongoose.connection.on('connected',function () {
console.log('Mongoose connect ' + DB_URL + " success");
});