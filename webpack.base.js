"use strict";

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src')
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                include: APP_PATH,
                exclude: /node_modules/,
                use: 'eslint-loader'
            },
            {
                test: /\.(js|jsx)$/,
                include: APP_PATH,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: {
                    'loader': 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'demo'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ]
}