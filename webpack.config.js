// const { resolve } = require('path');
var resolve = require('path').resolve;

module.exports = {
  entry: resolve('js', 'app.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  }
};
