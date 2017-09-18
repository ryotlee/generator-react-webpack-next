var baseConfig = require('./webpack.base');
var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['style-loader', 'postcss-loader']
        })
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose: true, // Write logs to console.
      dry: false //Use boolean "true" to test/emulate delete. (will not remove files).
    }),
    new ExtractTextPlugin({filename: 'static/css/[name].[hash].css', publicPath: './', allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({
     compress: {
       warnings: false,
       drop_console: false
     },
     output: {
       comments: false,
       beautify: false,
     }
   })
   ]
});
