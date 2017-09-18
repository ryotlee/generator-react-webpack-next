var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('../build/webpack.dev');
var compiler = webpack(webpackConfig);
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware')

var app = express();
app.use(webpackMiddleware(compiler));

app.use(webpackHotMiddleware(compiler, {log: console.log}));
// 静态文件
app.use('/static', express.static('../dist/static'));

var port = 5002;
app.listen(port, function() {
  console.log(`listenning on : http://localhost:${port}`);
})
