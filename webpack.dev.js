"use strict";

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const baseConfig = require('./webpack.base.js');

const config = merge(baseConfig, {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: 'bundle-[id].js',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin(),
        new webpack.HotModuleReplacementPlugin({
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'errors-only',
        // host: options.host || '0.0.0.0';
        // host: options.host, // Defaults to `localhost`
        // port: options.port // Defaults to 8080
    }
})

module.exports = config;
