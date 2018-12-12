const CleanWebpackPlugin = require('clean-webpack-plugin')
const {resolve} = require('path')
module.exports = {
	entry: {
		app: '@layout/index.js'
	},
	resolve: {
		//路径别名，import 的时候直接用别名代替，少写code
		alias: {
			'@': resolve(__dirname, 'src/'),
			'@layout': resolve(__dirname, 'src/layout/'),
			'@pages': resolve(__dirname, 'src/pages/'),
			'@utils': resolve(__dirname, 'src/utils/')
		},
		extensions: ['.js', '.jsx', '.json'] //不用写扩展名
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
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{test: /\.js$/, exclude: /node_modules/, use: {loader: 'babel-loader'}}
		]
	}
}
