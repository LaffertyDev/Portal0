/// <reference path="../typings/main.d.ts" />

const port = 13082;

var express = require('express');
var jade = require('jade');
var app = express();

app.set('view engine', 'jade')

app.get('/', function(req, res) {
    res.render('index', {title: 'Portal0', message: 'Hello World'});
});

app.listen(port, function() {
    console.log('Webserver started');
});

app.use('/static', express.static(__dirname + '/Client/Content'));
app.set('views', __dirname + '/Client/Views');

