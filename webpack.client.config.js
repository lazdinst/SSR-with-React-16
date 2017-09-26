var path = require('path');
var webpack = require('webpack');
var SRC_DIR = path.join(__dirname, 'client');
var DST_DIR = path.join(__dirname, 'public/dist');


module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ],
  },
  devtool: 'source-map',
};
