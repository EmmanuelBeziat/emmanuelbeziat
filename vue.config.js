const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	productionSourceMap: false,

	configureWebpack: {
		devtool: 'source-map',
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					PACKAGE_JSON: '"' + escape(JSON.stringify(require('./package.json'))) + '"'
				}
			}),
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
