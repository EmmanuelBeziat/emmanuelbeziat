const webpack = require('webpack')

module.exports = {
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
		themeColor: '',
		msTileColor: '',
		appleMobileWebAppCapable: '',
		appleMobileWebAppStatusBarStyle: '',
		manifestPath: '',
		iconPaths: {}
	},

	outputDir: '../site',
	devServer: {
		port: 3033
	}
}
