const axios = require('axios')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	srcDir: 'src/',

	generate: {
		async routes () {
			const blogs = await axios.get('https://rest.emmanuelbeziat.com/posts')
			const portfolios = await axios.get('https://rest.emmanuelbeziat.com/portfolio')
			const b_slugs = blogs.data.map(post => `/blog/${post.slug}`)
			const p_slugs = portfolios.data.map(portfolio => `/portfolio/${portfolio.slug}`)
			return [...b_slugs, ...p_slugs]
		},
		dir: '../site'
	},

	/*
	** Headers of the page
	*/
	head: {
		htmlAttrs: {
			lang: 'fr-FR',
			prefix: 'og: http://ogp.me/ns#'
		},

		title: '',
		titleTemplate: 'Emmanuel Béziat :: %s',

		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
			{ name: 'description', content: 'Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.', hid: 'description' },
			{ name: 'application-name', content: 'Emmanuel Béziat' },
			{ name: 'format-detection', content: 'telephone-no' },

			// Google
			{ name: 'google-site-verification', content: 'r-jxizeApI9fc9d0Lz8hsK4L_PFTuQdtzQ2AvWM7S-g' },
			{ name: 'theme-color', content: '#c3e88d' },

			// twitter
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:site', content: '@EmmanuelBeziat' },
			{ name: 'twitter:title', content: 'Emmanuel Béziat', hid: 'twTitle' },
			{ name: 'twitter:url', content: 'https://www.emmanuelbeziat.com', hid: 'twUrl' },
			{ name: 'twitter:image', content: 'https://images.emmanuelbeziat.com/social-default-tw.jpg', hid: 'twImage' },
			{ name: 'twitter:description', content: 'Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.', hid: 'twDesc' },

			// Facebook
			// { property: 'fb:app_id', content: '665950303526184' },
			{ property: 'og:title', content: 'Emmanuel Béziat', hid: 'ogTitle' },
			{ property: 'og:site_name', content: 'Emmanuel Béziat' },
			{ property: 'og:type', content: 'article' },
			{ property: 'og:url', content: 'https://www.emmanuelbeziat.com', hid: 'ogUrl' },
			{ property: 'og:locale:alternate', content: 'fr_FR' },
			{ property: 'og:image', content: 'https://images.emmanuelbeziat.com/social-default-fb.jpg', hid: 'ogImage' },
			{ property: 'og:description', content: 'Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.', hid: 'ogDesc' },

			// Apple
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
			{ name: 'apple-mobile-web-app-title', content: 'Emmanuel Béziat' },

			// Microsoft
			{ name: 'msapplication-config', content: '/touch/browserconfig.xml' }
		],
		link: [
			{ rel: 'shortcut icon', href: '/touch/emmanuelb-favicon.ico' },
			{ rel: 'apple-touch-icon', sizes: '180x100', href: '/touch/apple-touch-icon.png' },
			{ rel: 'mask-icon', href: '/touch/safari-pinned-tab.svg', color: '#f77669' },
			{ rel: 'icon', href: '/touch/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ rel: 'icon', href: '/touch/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ rel: 'manifest', href:'/touch/manifest.json' },
			{ rel: 'profile', href: 'http://gmpg.org/xfn/11' },
			{ rel: 'publisher', href: 'https://plus.google.com/+Emmanuelbeziat-web' },
			{ rel: 'alternate', href: '/atom.xml', type: 'application/atom+xml', title: 'Emmanuel Béziat :: Actualité du blog' }
		],

		noScript: [
			{ innerHTML: 'Javascript est requis pour parcourir ce site.' }
		]
	},

	/*
	** Global CSS
	*/
	css: [
		{ src: '~assets/stylus/main.styl', lang: 'stylus' }
	],

	minify: {
		removeEmptyAttributes: false,
		collapseWhitespace: true,
		conservativeCollapse: true,
		collapseBooleanAttributes: true,
		removeTagWhitespace: false,
		removeStyleLinkTypeAttributes: true
	},

	/*
	** Customize the loader
	*/
	loading: false,

	/**
	 * Router
	 */
	router: {
		linkActiveClass: '-active',
		base: '/'
	},

	/**
	 * Transition
	 */
	transition: {
		name: 'page',
		mode: 'out-in'
	},

	/**
	 * PLugins
	 */
	plugins: [
		'~plugins/vue-svg.js',
		'~plugins/vue-filters.js',
		'~plugins/vue-md-render.js'
	],

	/*
	** Build configuration
	*/
	build: {
		postcss: [
			require('autoprefixer')
		],
		/*
		** Run ESLINT on save
		*/
		extend (config, ctx) {
			if (ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},

		extend (config, { isDev, isClient }) {
			config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')

			if (!isDev) {
				config.devtool = false
				config.plugins.push(
					new webpack.optimize.UglifyJsPlugin({
						parse: {
							strict: true
						},
						compress: {
							unsafe: true,
							warnings: false,
							drop_console:true
						},
						output: {
							comments: false,
							ascii_only: true
						},
						mangle: true
					})
				)
			}
		},

		vendor: [
			'axios',
			'moment',
			'prismjs',
			'prismjs/plugins/toolbar/prism-toolbar.js',
			'prismjs/plugins/show-language/prism-show-language.min.js',
			'prismjs/components/prism-bash.min.js',
			'prismjs/components/prism-php.min.js'
		]
	}
}
