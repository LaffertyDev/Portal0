import { HttpServer } from "./server";

export class App {
	private server: HttpServer;

	constructor() {
		const args = process.argv.slice(2);
		const isDevelopment = this.IsDevelopment(args);
		if (isDevelopment) {
			// tslint:disable-next-line:no-console
			console.log("Starting Server in Development Mode...");
		}

		this.server = new HttpServer(isDevelopment, isDevelopment);
	}

	private IsDevelopment(processArgs: string[]): boolean {
		return processArgs.find((arg) => arg === "dev") !== undefined;
	}
}

const app = new App();
