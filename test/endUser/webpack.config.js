const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {    
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, ""),
        port: 8080,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }            
        ]
    },
    plugins: [
        new CleanWebpackPlugin()        
    ],
    resolve: {
        extensions: [".js"]
    }
}