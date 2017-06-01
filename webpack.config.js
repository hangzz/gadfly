"use strict";

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_PATH = path.resolve(__dirname, 'app');

module.exports = {
    entry: {
        app: path.join(__dirname, 'app')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader!'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.js$/,
                loader:'babel-loader',
                include: [APP_PATH]
            },
        ]
    },
    resolve: {                                      // resolve 指定可以被 import 的文件后缀
        extensions: ['*','.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'demo'
        })
    ]
}