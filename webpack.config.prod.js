"use strict";

const webpack = require('webpack');;
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

const config = merge(commonConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            'name':'vendor',
            'minChunks':2
        })
    ]
});

module.exports = config;