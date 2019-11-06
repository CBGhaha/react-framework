//webpack-dev-server 是express+webpack-dev-middleware 两者区别是webpack-dev-server是封装好的 除了webpack.config.js配置 很难做定制化的设置
//webpack-dev-middleware 可以手动配置服务 整合自己的后端服务

//但webpack-dev-middleware 并未实现webpack-dev-server的模块热替换功能 所以需要额外引入webpack-hot-middleware

const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const app = express()
const config = require('./webpack.dev.server.config.js')
const compiler = webpack(config)
const instance = webpackDevMiddleware(compiler)

app.use(instance)

let hotMiddleware = webpackHotMiddleware(compiler, {
  log: false,
  path: '/__webpack_hmr',
  heartbeat: 2000
})
app.use(hotMiddleware)
app.use('*', (req, res, next) => {
  const filename = path.join(__dirname, `dist/index.html`)
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})
instance.waitUntilValid(() => {
  console.log('\n\n\n请打开localhost:3001!\n')
})

app.listen(3001)
