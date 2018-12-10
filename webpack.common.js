const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: {
    app: './src/index.js'
  },
  optimization: {
    //将公用模块抽离，
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']) //清理压缩的文件
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'les-loader']
      },
      {test: /\.js$/, exclude: /node_modules/, use: {loader: 'babel-loader'}}
    ]
  }
}
