const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/build"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sass|css)$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    devServer: {
        hot: true,
        overlay: true,
        port: 5000
    }
};