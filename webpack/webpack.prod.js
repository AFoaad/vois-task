const path = require('path')
const { optimize } = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	plugins: [],
	output: {
		path: path.resolve(__dirname, '..', './build'),
		filename: 'js/[name].[chunkhash].js',
		chunkFilename: 'js/[name].[chunkhash].chunk.js',
	},
	optimization: {
		minimize: true,
		concatenateModules: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					parse: {
						ecma: 8,
					},
					compress: {
						ecma: 5,
						warnings: false,
						comparisons: true,
						inline: 2,
					},
					mangle: {
						safari10: true,
					},
					keep_classnames: false,
					keep_fnames: false,
					output: {
						ecma: 5,
						comments: false,
						ascii_only: true,
					},
				},
			}),
			new CssMinimizerPlugin({
				parallel: true,
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true },
						},
					],
				},
			}),
			new optimize.SplitChunksPlugin(),
			new UglifyJsPlugin(),
		],
		runtimeChunk: {
			name: (entrypoint) => `runtime-${entrypoint.name}`,
		},
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: 30,
			minSize: 0,
			maxSize: 244000,
			minChunks: 1,
			maxAsyncRequests: 30,
		},
		removeEmptyChunks: true,
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
		assetFilter: (assetFilename) =>
			!/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
	},
}
