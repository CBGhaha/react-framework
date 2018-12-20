//webpack-dev-server 是express+webpack-dev-middleware 两者区别是webpack-dev-server是封装好的 除了webpack.config.js配置 很难做定制化的设置
//webpack-dev-middleware 可以手动配置服务 整合自己的后端服务


const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.dev.config.js');
const compiler = webpack(config);
const instance = webpackDevMiddleware(compiler);

app.use(instance);
instance.waitUntilValid(() => {
  console.log('请打开localhost:3001!\n');
});

app.listen(3001);
