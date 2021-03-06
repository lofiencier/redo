const loaders = require('./loaders');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.less', '.css', '.vue'],
    alias: {

    }
  },
  module: {
    rules: [
      loaders.babel(),
      // loaders.less(),
      // loaders.css(),
      // loaders.vue(),
    ]
  },
  externals: {},
  plugins: [
    // new VueLoaderPlugin(),
  ]
}
