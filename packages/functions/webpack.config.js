const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  module: {
    noParse: /@aws-cdk/,
  },
  mode: 'production',
  optimization: {
    minimize: true,
    sideEffects: false,
  },
  context: path.resolve(__dirname),
  entry: './index.js',
  externals: ['aws-sdk', 'newrelic'],
  output: {
    libraryTarget: 'commonjs',
    filename: 'entrypoint.js',
    path: path.resolve(__dirname),
  },
};