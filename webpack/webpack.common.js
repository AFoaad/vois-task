const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
		],
	},
	output: {},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', './public/index.html'),
		}),
	],
	stats: 'errors-only',
}
