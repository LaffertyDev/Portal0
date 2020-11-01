import resolve from "rollup-plugin-node-resolve";
import sourcemaps from 'rollup-plugin-sourcemaps';

const WineModule = {
	treeshake: {
		moduleSideEffects: false,
		propertyReadSideEffects: false
	},
	input: "cgi/components/wine/winecalculator.js",
	output: {
		file: "www/dist/wine.bundle.js",
		format: "es",
		sourcemap: true
	},
	plugins: [
		resolve({
			modulesOnly: true
		}),
		sourcemaps()
	]
};

export default WineModule;
