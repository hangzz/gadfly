const webpack = require('webpack');
const path = require('path');

module.exports = {
    // 定义入口文件
    entry: [
        path.resolve(__dirname, 'app/index.js')       
    ],
    // 定义出口目录
    output: {                                       
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: { 
                                             
    },
    module: {
    },
    plugins: [

    ]
}