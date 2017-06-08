"use strict";

const webpack = require('webpack');;
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
var CleanPlugin = require("clean-webpack-plugin");

const config = merge(commonConfig, {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        // chunkFilename: 'bundle-[id].js',
        publicPath: '/'
    },
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
        new CleanPlugin(['dist']),
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