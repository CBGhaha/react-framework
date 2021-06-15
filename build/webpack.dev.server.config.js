var webpack = require('webpack')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
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
    new webpack.HotModuleReplacementPlugin(), //HMR 模块热替换
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../dll/react.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../dll/lib.manifest.json')
    }),
    // 插入动态链接库
    new AddAssetHtmlPlugin({ filepath: path.resolve(__dirname, '../dll', '*.dll.js') })
  ]
}
module.exports = merge(common, config)
