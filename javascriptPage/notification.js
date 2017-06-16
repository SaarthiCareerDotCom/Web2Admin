
var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static(__dirname + '/public'));
// app.get('/', function (req, res) {
//   // res.sendFile(__dirname + '/index.html');
// });

var server =app.listen(3000);
  // myFunction();
