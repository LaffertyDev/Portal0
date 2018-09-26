import * as express from "express";
import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import * as Path from "path";

export const SERVER_INSECURE_PORT = 8080;
export const SERVER_SECURE_PORT = 4433;
export const SERVER_HOSTNAME = "localhost";

const PUBLIC_DIRECTORY = "../../../www";
const PUBLIC_DIRECTORY_FULL_PATH = Path.join(__dirname, PUBLIC_DIRECTORY);
const SERVER_DIRECTORY = "../../";
const SERVER_DIRECTORY_PATH = Path.join(__dirname, SERVER_DIRECTORY);
const SERVER_KEY_PATH = Path.join(SERVER_DIRECTORY_PATH, "key.pem");
const SERVER_CERT_PATH = Path.join(SERVER_DIRECTORY_PATH, "cert.pem");

const certificate = {
	cert: fs.readFileSync(SERVER_CERT_PATH),
	key: fs.readFileSync(SERVER_KEY_PATH),
};

export class HttpServer {
	private httpServer: http.Server;
	private httpsServer: https.Server;

	constructor(serveSource: boolean) {
		const server = express();
		server.use(express.static(PUBLIC_DIRECTORY_FULL_PATH));

		if (serveSource) {
			/**
			 * This handles sourcemaps. We only want to allow this on developer environments
			 */
			const srcPath = Path.join(__dirname, SERVER_DIRECTORY, "../src");
			server.use("/src", express.static(srcPath));
		}

		this.httpServer = http.createServer((req, res) => {
			const redirectUrl = `https://${SERVER_HOSTNAME}:${SERVER_SECURE_PORT}${req.url}`;
			res.writeHead(301, { Location: redirectUrl });
			res.end();
		}).listen(SERVER_INSECURE_PORT);

		this.httpsServer = https.createServer(certificate, server);
		this.httpsServer.listen(SERVER_SECURE_PORT);
	}
}

/*
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
app.set('views', __dirname + '/client/views');
app.set('view options', { layout: '_layout' });

//hbs.registerPartial('partial', fs.readFileSync(__dirname + '/Client/Views/partial.hbs', 'utf8'));
hbs.registerPartials(__dirname + '/client/views/partials');

//for some reason, we can't register the SASS directly under content (because it's included in the app.use)
app.use(sass_middleware({
    src: __dirname + '/sass',
    dest: __dirname + '/client/content/css',
    prefix: '/css',
    debug: true
}));

app.use(express.static(__dirname + '/client/content'));
app.use('/app', express.static(__dirname + '/client/app'));

app.get('/', function(req, res) {
    res.render('index');
    console.log('Index Hit');
});

app.get('/resume', function(req, res) {
    res.render('resume');
    console.log('Resume Hit');
});

app.get('/components', function(req, res) {
    res.render('components');
    console.log('Components Hit');
});

app.get('/worldbuilder', function(req, res) {
    res.render('dnd/worldbuilder');
    console.log('Worldbuilder Hit');
});
app.get('/dnd/action', function(req, res) {
    res.render('dnd/dndaction');
    console.log('action econ Hit');
});
app.get('/procgen', function(req, res) {
    res.render('procgen/procgen');
    console.log('proc gen Hit');
});
app.get('/dnd/battlemap', function(req, res) {
    res.render('dnd/battlemap');
    console.log('battlemap Hit');
});

//taken from http://stackoverflow.com/a/9802006/2383477
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(port, function() {
    console.log('Webserver started');
});
*/
