/* External dependencies */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', path.resolve(__dirname, '..', 'src', 'main.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'build'),
    compress: true,
    port: 4001,
    host: '0.0.0.0',
  },
};
