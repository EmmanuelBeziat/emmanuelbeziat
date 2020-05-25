const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	productionSourceMap: false,
	configureWebpack: config => {
		config.module
			.rule('/\.md$')
			.use('raw-loader')
	},
	configureWebpack: {
		devtool: 'source-map',
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					PACKAGE_JSON: '"' + escape(JSON.stringify(require('./package.json'))) + '"'
				}
			}),
			// new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
			new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr/),
			// new BundleAnalyzerPlugin()
		]
	},

	pwa: {
		name: 'Emmanuel Béziat',
		themeColor: '#233238',
		msTileColor: '#233238',
		appleMobileWebAppCapable: 'no',
		appleMobileWebAppStatusBarStyle: 'white',
		manifestPath: 'favicons/site.webmanifest',
		iconPaths: {
			favicon32: 'favicon-32x32.png',
			favicon16: 'favicon-16x16.png',
			appleTouchIcon: 'apple-touch-icon.png',
			maskIcon: 'safari-pinned-tab.svg',
			msTileImage: 'mstile-150x150.png'
		},
		manifestOptions: {
			icons: [
				{
					'src': '/favicons/android-chrome-192x192.png',
					'sizes': '192x192',
					'type': 'image/png'
				},
				{
					'src': '/favicons/android-chrome-512x512.png',
					'sizes': '512x512',
					'type': 'image/png'
				}
			]
		}
	},

	outputDir: '../site',
	devServer: {
		port: 3033
	}
}
