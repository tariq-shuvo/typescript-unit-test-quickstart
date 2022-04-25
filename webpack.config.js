const path = require('path');
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'app', 'index'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.ts?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'ts-loader'
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', ]
  },
  devtool: 'eval-source-map',
  performance: { hints: false }
};