import resolve from "rollup-plugin-node-resolve";
import sourcemaps from 'rollup-plugin-sourcemaps';

const TimeDistanceModule = {
	treeshake: {
		moduleSideEffects: false,
		propertyReadSideEffects: false
	},
	input: "cgi/timedistance/timedistance.js",
	external: [
		// "react",
		// "react-dom"
	],
	output: {
		file: "www/dist/timedistance.bundle.js",
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

export default TimeDistanceModule;
