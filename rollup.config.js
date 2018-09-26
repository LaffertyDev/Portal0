import resolve from "rollup-nodemodules-resolve";
import sourcemaps from 'rollup-plugin-sourcemaps';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	treeshake: {
		pureExternalModules: true,
		propertyReadSideEffects: false
	},
	input: "www/dist/client/app.js",
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
