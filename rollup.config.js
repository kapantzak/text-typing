import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import {uglify} from "rollup-plugin-uglify";

export default {
    input: "./src/main.js",
    output: {
        file: "./index.js",
        format: "cjs"
    },
    plugins: [
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