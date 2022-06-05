const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		hot: true,
		open: true,
	},
	plugins: [new ReactRefreshWebpackPlugin()],
	output: {
		path: path.resolve(__dirname, '..', './build'),
		filename: '[name].js',
		chunkFilename: '[name].js',
		crossOriginLoading: 'anonymous',
	},
}
