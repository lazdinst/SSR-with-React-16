const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    name: 'client',
    entry: path.join(__dirname, 'src/client/index.js'),
    output: {
      path: path.join(__dirname, 'public/dist'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
    },
  },
  {
    name: 'server',
    target: 'node',
    node: {
      __dirname: true,
      __filename: true,
    },
    externals: [nodeExternals()],
    entry: path.join(__dirname, 'src/index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.js',
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
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
    },
  },
];
