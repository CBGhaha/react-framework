var webpack = require('webpack')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
common.entry.main.splice(
  1,
  0,
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
)
const config = {
  mode: 'development',
  module: {
    rules: [
      //编译css/less文件
      {
        test: [/\.css/, /\.less/],
        use: [
          'style-loader', //style-loader将所有的计算后的样式加入页面中
          {
            loader: 'css-loader', //css-loader用于支持css的模块化 可以让css支持import require
            options: {
              minimize: true,
              modules: true
            }
          },
          'less-loader',
          {
            loader: 'postcss-loader', //css兼容性前缀
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 10 versions']
                })
              ]
            }
          }
        ],
        exclude: /node_module|dist/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() //HMR 模块热替换
  ]
}
module.exports = merge(common, config)
