/* External dependencies */
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, '..', 'src', 'main.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/ws\/lib)/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production"),
    }),
    new BundleAnalyzerPlugin(),
  ],
};
