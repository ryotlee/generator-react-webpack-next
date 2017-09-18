var baseConfig = require('./webpack.base');
var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?http://localhost:5002/',
    'webpack/hot/dev-server',
    path.resolve(__dirname, '../src/main.js')
  ],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true
  }
});
