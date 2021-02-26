const webpack = require('webpack')
// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	productionSourceMap: false,

	/* configureWebpack: config => {
		config.module
			// .rule('/.md$')
			// .use('raw-loader')
			.rule('images')
			.test('/.(png|jpe?g|webp|gif|svg|)$/i')
			.use('img-optimize-loader')
			.loader('img-optimize-loader')
			.options({
				compress: {
					// webp: true,
					disableOnDevelopment: true,
					svgo: true
				}
			})
	}, */

	configureWebpack: {
		devtool: 'source-map',
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					PACKAGE_JSON: '"' + escape(JSON.stringify(require('./package.json'))) + '"'
				}
			}),
			/* new ImageminWebpWebpackPlugin({
				config: [{
					test: /\.(jpe?g|png|gif)/,
					options: {
						quality: 75,
						lossless: false
					}
				}],
				overrideExtension: true,
				detailedLogs: false,
				silent: false,
				strict: true
			}) */
			// new BundleAnalyzerPlugin()
		]
	},

	pluginOptions: {
		extendServer: app => {
			app.disable('x-powered-by')
		}
	},

	pwa: {
		name: 'Emmanuel Béziat',
		themeColor: '#233238',
		msTileColor: '#233238',
		appleMobileWebAppCapable: 'no',
		appleMobileWebAppStatusBarStyle: 'white',
		manifestPath: 'favicons/site.webmanifest',
		iconPaths: {
			favicon32: 'favicons/favicon-32x32.png',
			favicon16: 'favicons/favicon-16x16.png',
			appleTouchIcon: 'favicons/apple-touch-icon.png',
			maskIcon: 'favicons/safari-pinned-tab.svg',
			msTileImage: 'favicons/mstile-150x150.png'
		},
		manifestOptions: {
			short_name: 'EmmanuelB',
			icons: [
				{
					src: '/favicons/android-chrome-192x192.png',
					sizes: '192x192',
					type: 'image/png'
				},
				{
					src: '/favicons/android-chrome-512x512.png',
					sizes: '512x512',
					type: 'image/png'
				}
			]
		}
	},

	outputDir: '../site',

	devServer: {
		port: 3033
	}
}
