var sass = require("sass");
var fs = require("fs");

var result = sass.renderSync({
	file: "src/client/sass/main.scss",
	outFile: "www/dist/bundle.css"
});

fs.writeFile("www/dist/bundle.css", result.css, function(err){
	if(!err){
		//file written on disk
	}
});
