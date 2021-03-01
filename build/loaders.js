const path = require('path');
const resolve = path.resolve;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV;

exports.babel = () => ({
  test: /.js$/,
  include: [resolve('src')],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: isDev ? './.cache/babel' : false
    }
  }
});

exports.vue = () => ({
  test: /.vue$/,
  include: [resolve('src')],
  loader: 'vue-loader',
  options: {
    hotReload: isDev,
  },
});

exports.css = () => ({
  test: /.css$/,
  use: [
    isDev ? 'vue-style-loader': MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        esModule: false,
      }
    },
    'postcss-loader'
  ]
});

exports.less = () => ({
  test: /.less$/,
  use: [
    isDev ? 'vue-style-loader': MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        esModule: false
      }
    },
    'postcss-loader',
    'less-loader' 
  ],
});
