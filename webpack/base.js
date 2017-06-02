"use strict";

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


const APP_PATH = path.resolve(__dirname, '../src');

module.exports = {
    entry: {
        app: path.join(__dirname, '../src')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: 'bundle-[id].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                include: APP_PATH,
                loader: "eslint-loader"
            },
            {
                test: /\.(js|jsx)$/,
                include: APP_PATH,
                loader: "babel-loader",
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                }
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                   
                    "style-loader",
                    "css-loader",
                    {
                        "loader": "postcss-loader",
                        // "options": {
                        //     postcss: function () {
                        //         return [
                        //             require("autoprefixer")({
                        //                 browsers: ['ie>=8', '>1% in CN']
                        //             })
                        //         ]
                        //     }
                        // }
                    }
                ]
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
            'name': 'common',
            'minChunks': 2
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8','>1% in CN']
                        })
                    ]
                }
            }
        })
    ]
}