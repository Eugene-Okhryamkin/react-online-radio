const path = require("path");
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
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ["ie >= 10", "last 4 versions"]
                                })
                            ]
                        }
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },

    devServer: {
        hot: true,
        overlay: true,
        port: 2500
    }
};