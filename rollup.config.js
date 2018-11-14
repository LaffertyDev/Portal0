import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import sourcemaps from 'rollup-plugin-sourcemaps';
import ClockModule from "./src/client/components/clock/rollup.config";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

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

const worldbuilder = {
	treeshake: {
		pureExternalModules: true,
		propertyReadSideEffects: false
	},
	input: "cgi/worldbuilder/worldbuilder.js",
	external: [
		// "react",
		// "react-dom"
	],
	output: {
		file: "www/dist/worldbuilder.bundle.js",
		format: "es",
		sourcemap: true
	},
	plugins: [
		resolve({
			module: true,
			modulesOnly: false
		}),
		commonjs({
			include: 'node_modules/**',
			namedExports: {
				'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement'],
				'node_modules/react-dom/index.js': ['render']
			}
		}),
		replace({
		  'process.env.NODE_ENV': JSON.stringify( 'production' )
		}),
		sourcemaps()
	]
};

const timedistance = {
	treeshake: {
		pureExternalModules: true,
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
			module: true,
			modulesOnly: true
		}),
		sourcemaps()
	]
};

export default [
	appBundle,
	worldbuilder,
	timedistance,
	ClockModule
];
