const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: './dist', //告诉webpack-dev-server 去./dist 找index.html 入口文件，webpack-dev-server --open 运行命令直接在浏览器中打开文件了
    host: 'localhost',
    port: 2000,
    hot: true,
    // open: true,
    proxy: {
      '/mock': {
        target: 'http://mymock.tongdun.me/api/app/mock/44',
        changeOrigin: true, // 改变源，同源不需要设置
        pathRewrite: {'^/mock': ''},
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '护肤手账',
      filename: 'index.html',
      template: './index.html',
    }), // 生成入口文件
    new webpack.HotModuleReplacementPlugin(), // 热替换，不需要刷新
  ],
})
