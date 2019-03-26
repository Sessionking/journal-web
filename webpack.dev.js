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
    contentBase: path.join(__dirname, 'src'), // 告诉webpack-dev-server 去./dist 找index.html 入口文件，webpack-dev-server --open 运行命令直接在浏览器中打开文件了
    hot: true,
    historyApiFallback: true,
    // open: true,
    proxy: {
      '/mock': {
        target: 'http://mymock.tongdun.me/api/app/mock/44',
        changeOrigin: true, // 改变源，同源不需要设置
        pathRewrite: {'^/mock': ''}, // 替换服务器上 请求路径的api，否则请求不过去
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '日记本',
      hash: true, // js 添加hash后缀
      filename: 'index.html', // 输出文件
      template: './index.html', // 本地的模板文件，可以使ejs,html 等
    }), // 生成入口文件
    new webpack.HotModuleReplacementPlugin(), // 热替换，不需要刷新
  ],
})
