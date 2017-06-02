"use strict";

const webpack = require('webpack');;
const merge = require('webpack-merge');
const commonConfig = require('./base.js');

const config = merge(commonConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});

module.exports = config;