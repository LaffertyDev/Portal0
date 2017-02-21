/// <reference path="../typings/main.d.ts" />

const port = 13082;

//dependencies
var express = require('express'),
    app = express(),
    sass = require('node-sass'),
    path = require('path'),
    sass_middleware = require('node-sass-middleware');
//end dependencies
app.set('view engine', 'vash');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Client/Views/index.html');
    console.log('Index Hit');
});

app.get('/resume', function(req, res) {
    res.sendFile(__dirname + '/Client/Views/resume.html');
    console.log('Resume Hit');
});

app.get('/worldbuilder', function(req, res) {
    res.sendFile(__dirname + '/Client/Views/worldbuilder.html');
    console.log('Worldbuilder Hit');
});

app.listen(port, function() {
    console.log('Webserver started');
});

//for some reason, we can't register the SASS directly under content (because it's included in the app.use)
app.use(sass_middleware({
    src: __dirname + '/sass',
    dest: __dirname + '/Client/Content/css',
    prefix: '/css',
    debug: true
}));

app.use(express.static(__dirname + '/Client/Content'));
app.use('/App', express.static(__dirname + '/Client/App'));