import * as express from "express";
import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import * as Path from "path";
import { SERVER_HOSTNAME, SERVER_INSECURE_PORT, SERVER_SECURE_PORT } from "./../shared/constants";

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
