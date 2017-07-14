var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './target');
var APP_DIR = path.resolve(__dirname, './assets/javascript/components/');

var config = {
    devtool: 'cheap-eval-source-map',
    entry: [
        APP_DIR + '/index.jsx',
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {

                test: /\.jsx?$|\.js?$/,
                loader: 'babel-loader',
                include: APP_DIR,
                exclude: /bundle\.js$/
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
	        filename: 'index.html',
	        inject: 'body'
        })
    ]
};

module.exports = config;