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
  loader: 'vue-loader',
  options: {
    hotReload: isDev,
  },
});

exports.css = () => ({
  test: /.css$/,
  use: [
    'vue-style-loader',
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
    'vue-style-loader',
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
