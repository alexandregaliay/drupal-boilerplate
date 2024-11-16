const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    allowedHosts: 'all',
    host: 'drupalboilerplate.test',
    static: false,
    hot: true,
    proxy: [
      {
        context: ['**'],
        target: 'http://drupalboilerplate.test',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        include: path.resolve(__dirname, 'src/scss'),
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              api: 'modern-compiler',
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
});
