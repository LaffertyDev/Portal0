var sass = require("sass");
var fs = require("fs");
var handlebars = require("handlebars");

class BuildSystem {
	BuildCSS() {
		var result = sass.renderSync({
			file: "src/client/sass/main.scss",
			outFile: "www/dist/bundle.css"
		});

		fs.writeFile("www/dist/bundle.css", result.css, function (err) {
			if (!err) {
				//file written on disk
			}
		});
	}

	BuildHTML() {
		const extension = "hbs";
		const outDirectory = "www/dist/views";
		const viewDir = "src/client/views";
		const views = ["index", "components", "404", "worldbuilder", "medievaldemo", "timedistance","bladesclock"];
		const partials = ["footer", "header"];

		for(const partial of partials) {
			const filepath = `${viewDir}/partials/${partial}.${extension}`;
			const fileData = fs.readFileSync(filepath, "utf8");
			handlebars.registerPartial(partial, fileData);
		}

		const layout = "_layout.hbs";
		const filepath = fs.readFileSync(`${viewDir}/${layout}`, "utf8");
		const layoutTemplate = handlebars.compile(filepath);

		if (!fs.existsSync(outDirectory)) {
			fs.mkdirSync(outDirectory);
			console.log("Created view directory");
		}

		for(const view of views) {
			const filePath = `${viewDir}/${view}.${extension}`;
			const file = fs.readFileSync(filePath, "utf8");
			const template = handlebars.compile(file);
			const generated = template({});
			const withLayout = layoutTemplate({
				body: generated
			});

			const viewFileName = `${view}.html`;
			const writeFilePath = `${outDirectory}/${viewFileName}`;
			
			fs.writeFile(writeFilePath, withLayout, (err) => {
				if (err) {
					throw err;
				}

				console.log(`wrote ${viewFileName} to disk`);
			});
		}
	}
}

const buildSystem = new BuildSystem();

if (process.argv.includes("css")) {
	buildSystem.BuildCSS();
}

if (process.argv.includes("html")) {
	buildSystem.BuildHTML();
}
