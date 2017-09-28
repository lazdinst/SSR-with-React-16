const path = require('path');

module.exports = [
  {
    name: 'client',
    entry: path.join(__dirname, 'client/index.js'),
    output: {
      path: path.join(__dirname, 'public/dist'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ],
    }
  },
  {
    name: 'server',
    target: 'node',
    entry: path.join(__dirname, 'server/index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ]
    }
  },
];
