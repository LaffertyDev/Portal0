/// <reference path="../typings/main.d.ts" />

const port = 13082;

//dependencies
var express = require('express'),
    app = express(),
    sass = require('node-sass'),
    path = require('path'),
    sass_middleware = require('node-sass-middleware'),
    hbs = require('hbs');
//end dependencies

app.set('view engine', 'hbs');
app.set('views', __dirname + '/Client/Views');

//hbs.registerPartial('partial', fs.readFileSync(__dirname + '/Client/Views/partial.hbs', 'utf8'));
hbs.registerPartials(__dirname + '/Client/Views/Partials');

//for some reason, we can't register the SASS directly under content (because it's included in the app.use)
app.use(sass_middleware({
    src: __dirname + '/sass',
    dest: __dirname + '/Client/Content/css',
    prefix: '/css',
    debug: true
}));

app.use(express.static(__dirname + '/Client/Content'));
app.use('/App', express.static(__dirname + '/Client/App'));

app.get('/', function(req, res) {
    res.render('index');
    //res.sendFile(__dirname + '/Client/Views/index.html');
    console.log('Index Hit');
});

app.get('/resume', function(req, res) {
    res.render('resume');
    console.log('Resume Hit');
});

app.get('/worldbuilder', function(req, res) {
    res.render('worldbuilder');
    console.log('Worldbuilder Hit');
});

app.listen(port, function() {
    console.log('Webserver started');
});