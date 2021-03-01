const webpack=require('webpack');
const { merge }=require('webpack-merge');
const path = require('path');

const TerserWebpackPlugin= require('terser-webpack-plugin');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const BundleAnalyzePlugin= require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DotEnv= require('dotenv-webpack');
let commonConfig = require("./webpack.common.js");

const env = process.env.ENV;
const openAnalyzer = process.env.ANALYZE;

const webpackProdConfig={
    mode:'production',
    entry:{
        app:[path.resolve(__dirname,'../src/index.js')]
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        publicPath:'/',
        filename:'js/[id].[hash:8].js',
        chunkFilename:'js/[id].[hash:8].js'
    },
    optimization:{
        minimizer:[
            new TerserWebpackPlugin({
                // cache:'./.cache/terser', //缓存
                parallel:true,//多线程
                // sourceMap:false,
                terserOptions: {
                  warnings: false,
                  compress: {
                    unused: true,
                    dead_code:true,
                    drop_console: true,
                    drop_debugger: true,
                  },
                  output: {
                    ecma:5,
                    comments: false, //不保留注释
                    beautify: false, //不需要格式化
                  },
                },
              }),
              new OptimizeCssAssetsPlugin({
                  assetNameRegExp:/(\.m)?\.(css|less)$/,
                  cssProcessorOptions:{
                      safe:true,
                      mergeLonghand:false,
                      discardComments:{
                          removeAll:true
                      }
                  },
                  canPrint:true
              })
        ],
        runtimeChunk:{
           name:entryPoint=>`runtime.${entryPoint.name}`
        },
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          minRemainingSize: 0,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
        runtimeChunk:'single'
    },
    
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.ids.HashedModuleIdsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].[hash:8].css',
            chunkFilename:'css/[name].[hash:8].css'
        }),
        ...openAnalyzer ? [new BundleAnalyzePlugin({
            openAnalyzer:true,
            analyzerMode: "static",
            analyzerPort:8001,
        })]:[]
    ]
}
module.exports = merge(commonConfig, webpackProdConfig);
  