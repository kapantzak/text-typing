import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import {uglify} from "rollup-plugin-uglify";

export default {
    input: "./src/main.js",
    output: {
        file: "./index.js",
        format: "cjs"
    },
    plugins: [
        postcss({
            extensions: [".css"]
        }),
        babel({
            exclude: "node_modules/**"
        }),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        uglify()
    ]
};