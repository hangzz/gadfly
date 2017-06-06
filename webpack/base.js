"use strict";

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_PATH = path.resolve(__dirname, '../src');

function ConsoleLogOnBuildWebpackPlugin() {

};


// function MyPlugin(options) {
//   this.options = options;
// };
// MyPlugin.prototype.apply = function(compiler) {
//     console.log(this)
//   compiler.plugin("compile", function(params) {
//     console.log("The compiler is starting to compile...");
//   });

//   compiler.plugin("compilation", function(compilation) {
//     console.log("The compiler is starting a new compilation...");

//     compilation.plugin("optimize", function() {
//       console.log("The compilation is starting to optimize files...");
//     });
//   });

//   compiler.plugin("emit", function(compilation, callback) {
//     console.log("The compilation is going to emit files...");
//     callback();
//   });
// };




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
                use: 'eslint-loader'
            },
            {
                test: /\.(js|jsx)$/,
                include: APP_PATH,
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
        // new MyPlugin({
        //     property: 'value'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            'name': 'common',
            'minChunks': 2
        })
    ]
}