var resolve = require('path').resolve;

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: resolve('js', 'app.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js$/,
      exclude: /node_modules/,
    })
  ]
};
