var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('hello world');
});
app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/favicon.ico'));


var fs = require('fs')
var logger = require('morgan');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(logger('combined', {stream: accessLogStream}));