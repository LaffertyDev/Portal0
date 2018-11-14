import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import sourcemaps from 'rollup-plugin-sourcemaps';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const WorldbuilderModule = {
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

export default WorldbuilderModule;
