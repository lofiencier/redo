const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const DotEnv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const env = process.env.NODE_ENV;

const webpackDevConfig = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]-[hash:8].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'crash',
      inject: true,
      hash: true,
      cache: true, 
      template: './build/static/index.html',
      favicon: './build/static/favicon.ico'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    open: false,
  }
}

module.exports = merge(commonConfig, webpackDevConfig);