import resolve from "rollup-plugin-node-resolve";
import sourcemaps from 'rollup-plugin-sourcemaps';
import ClockModule from "./src/client/components/clock/rollup.config";
import TimeDistanceModule from "./src/client/timedistance/rollup.config";
import WorldbuilderModule from "./src/client/worldbuilder/rollup.config";

const appBundle = {
	treeshake: {
		pureExternalModules: true,
		propertyReadSideEffects: false
	},
	input: "cgi/app.js",
	external: [
		//"three"
	],
	output: {
		file: "www/dist/bundle.js",
		format: "es",
		paths: {
			//"three": "../node_modules/three/build/three.module.js"
		},
		sourcemap: true
	},
	plugins: [
		resolve({
			module: true,
			modulesOnly: true
		}),
		// Typescript outputs sourcemaps separately
		// We want to bundle the chained-sourcemaps so the browser can debug correctly
		sourcemaps()
	]
};

export default [
	appBundle,
	WorldbuilderModule,
	TimeDistanceModule,
	ClockModule
];
