const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  target: 'web',
  entry: {
    bundle: ['./src/scss/main.scss', './src/js/main.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/themes/custom/boilerplate/dist/',
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new WebpackBar(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
