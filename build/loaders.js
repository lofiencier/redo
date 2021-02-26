const path = require('path');
const resolve = path.resolve;
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
  use: {
    loader: 'vue-loader',
  },
  options: {
    hotReload: isDev
  }
});

exports.css = () => ({
  test: /.css$/,
  use: [
    'vue-style-loader',
    'postcss-loader',
    'css-loader'
  ],
  options: {}
});

exports.less = () => ({
  test: /.less$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'postcss-loader',
    'less-loader'
  ],
  options: {}
});