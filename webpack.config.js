const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: join(__dirname, 'example/index.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: join(__dirname, 'example/index.html'),
			filename: './index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		port: 3001
	}
};
