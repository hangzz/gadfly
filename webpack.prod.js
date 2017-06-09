"use strict";

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");

const baseConfig = require('./webpack.base.js');

const config = merge(baseConfig, {
    output: {
        path: path.join(__dirname, 'dist'),
        chunkFilename: 'chunk/bundle-[id].js',
        filename: '[name].[chunkhash].js'
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