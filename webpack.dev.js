const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist', //告诉webpack-dev-server 去./dist 找index.html 入口文件，webpack-dev-server --open 运行命令直接在浏览器中打开文件了
    hot: true
  }
})
