const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production', // 使用生产环境中，调用压缩插件，压缩代码
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devtool: 'source-map', //调试生产环境的代码
  optimization: {
    // 将公用模块抽离，
    splitChunks: {
      chunks: 'all',
      // 缓存
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    // runtimeChunk: 'single'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true, // 使用资源映射将错误消息位置映射到模块
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'), // 设置环境变量的值, process 对象： node 的进程； process.env 返回环境信息的对象；
    }),
    new webpack.HashedModuleIdsPlugin(), // 保持打包的hash值不变，使用浏览器缓存，少请求文件,与cacheGroup 合并使用
  ],
})
