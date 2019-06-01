const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const sass = require("node-sass");

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
                test: /\.(jsx|js|json)$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sass|css)$/,
                use: [
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ["ie >= 9", "last 4 versions"]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    devServer: {
        hot: true,
        overlay: true,
        port: 2000
    }
};