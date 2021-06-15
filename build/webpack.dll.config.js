const path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { DllPlugin } = webpack;

module.exports = {
  entry: {
    react: ['react', 'react-router-dom', 'react-dom'],
    lib: ['axios']

  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: '_dll_[name]'
  },
  plugins: [
    new CleanWebpackPlugin(['../dll']),
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, '../dll', '[name].manifest.json')
    })
  ],
  externals: {
    katex: 'katex'
  }
};