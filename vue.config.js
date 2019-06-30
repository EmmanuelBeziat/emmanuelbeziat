const webpack = require('webpack')

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
			new webpack.IgnorePlugin(/^\.\/locale\/(en|fr)\.js$/, /moment$/)
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
			favicon32: 'favicons/favicon-32x32.png',
			favicon16: 'favicons/favicon-16x16.png',
			appleTouchIcon: 'favicons/apple-touch-icon.png',
			maskIcon: 'favicons/safari-pinned-tab.svg',
			msTileImage: 'favicons/mstile-144x144.png'
		}
	},

	outputDir: '../site',
	devServer: {
		port: 3033
	}
}
