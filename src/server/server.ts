import * as express from "express";
import * as expressHandlebars from "express-handlebars";
import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import * as Path from "path";

export const SERVER_INSECURE_PORT = 8080;
export const SERVER_SECURE_PORT = 4433;
export const SERVER_HOSTNAME = "localhost";

const PUBLIC_DIRECTORY = "../../www";
const PUBLIC_DIRECTORY_FULL_PATH = Path.join(__dirname, PUBLIC_DIRECTORY);
const SERVER_DIRECTORY = "../";
const SERVER_DIRECTORY_PATH = Path.join(__dirname, SERVER_DIRECTORY);
const VIEWS_DIRECTORY = Path.join(__dirname, PUBLIC_DIRECTORY, "views");
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

		server.engine("hbs", expressHandlebars({
			defaultLayout: "_layout",
			extname: "hbs",
			layoutsDir: VIEWS_DIRECTORY,
			partialsDir: Path.join(VIEWS_DIRECTORY, "partials"),
		}));
		server.set("view engine", "hbs");
		server.set("views", VIEWS_DIRECTORY);

		server.use(express.static(PUBLIC_DIRECTORY_FULL_PATH));

		// server.use(sass_middleware({
		// 	src: __dirname + '/sass',
		// 	dest: __dirname + '/client/content/css',
		// 	prefix: '/css',
		// 	debug: true
		// }));

		// Handlebars.registerPartial("footer", fs.readFileSync(Path.join(__dirname, PUBLIC_DIRECTORY, "views/partials/footer.hbs"), "utf8"));
		// Handlebars.registerPartial("header", fs.readFileSync(Path.join(__dirname, PUBLIC_DIRECTORY, "views/partials/footer.hbs"), "utf8"));

		server.get("/", (req, res) => {
			res.render("index");
			console.log("Index Hit");
		});

		server.get("/resume", (req, res) => {
			res.render("resume");
			console.log("Resume Hit");
		});

		server.get("/components", (req, res) => {
			res.render("components");
			console.log("Components Hit");
		});

		server.get("/worldbuilder", (req, res) => {
			res.render("dnd/worldbuilder");
			console.log("Worldbuilder Hit");
		});
		server.get("/dnd/action", (req, res) => {
			res.render("dnd/dndaction");
			console.log("action econ Hit");
		});

		// taken from http://stackoverflow.com/a/9802006/2383477
		server.use((req, res, next) => {
			res.status(404);
			// respond with html page
			if (req.accepts("html")) {
				res.render("404", { url: req.url });
				return;
			}

			// respond with json
			if (req.accepts("json")) {
				res.send({ error: "Not found" });
				return;
			}

			// default to plain-text. send()
			res.type("txt").send("Not found");
		});

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
