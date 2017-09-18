var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'static/js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["react", "es2015"]
        }
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: 'css-loader'
      }, {
        loader: 'style-loader'
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.tpl',
      title: "React 模板页面",
      filename: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      // filename: "vendor.js"
      // (Give the chunk a different name)
      minChunks: function(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    })
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
