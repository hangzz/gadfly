"use strict";

const webpack = require('webpack');;
const merge = require('webpack-merge');
const commonConfig = require('./base.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = merge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "postcss-loader",
                        "less-loader"
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
        }),
        new ExtractTextPlugin("styles.css")
    ]
});

module.exports = config;