const pkg = require('./package')
const axios = require('axios')

module.exports = {
	mode: 'spa',

	/*
	 ** Static
	 */
	generate: {
		async routes () {
			const blogs = await axios.get(
				`https://rest.emmanuelbeziat.com/posts`
			)
			const portfolios = await axios.get(
				`https://rest.emmanuelbeziat.com/portfolio`
			)
			const projets = await axios.get(
				`https://rest.emmanuelbeziat.com/projects`
			)
			const postSlugs = blogs.data.map(post => `/blog/${post.slug}`)
			const portfolioSlugs = portfolios.data.map(
				portfolio => `/portfolio/${portfolio.slug}`
			)
			return [...postSlugs, ...portfolioSlugs]
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
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
			},
			{
				name: 'description',
				content:
					'Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.',
				hid: 'description'
			},
			{ name: 'application-name', content: 'Emmanuel Béziat' },
			{ name: 'format-detection', content: 'telephone-no' },

			// Google
			{
				name: 'google-site-verification',
				content: 'r-jxizeApI9fc9d0Lz8hsK4L_PFTuQdtzQ2AvWM7S-g'
			},
			{ name: 'theme-color', content: '#c3e88d' },

			// twitter
			{ name: 'twitter:card', content: 'summary_large_image', hid: 'twitter:card' },
			{ name: 'twitter:site', content: '@EmmanuelBeziat', hid: 'twitter:site' },
			{
				name: 'twitter:image',
				content:
					'https://images.emmanuelbeziat.com/social-default-tw.jpg',
				hid: 'twitter:image'
			},

			// Facebook
			// { property: 'fb:app_id', content: '665950303526184' },
			{
				property: 'og:title',
				content: 'Emmanuel Béziat',
				hid: 'og:title'
			},
			{ property: 'og:site_name', content: 'Emmanuel Béziat' },
			{ property: 'og:type', content: 'article' },
			{
				property: 'og:url',
				content: 'https://www.emmanuelbeziat.com',
				hid: 'og:url'
			},
			{ property: 'og:locale:alternate', content: 'fr_FR' },
			{
				property: 'og:image',
				content:
					'https://images.emmanuelbeziat.com/social-default-fb.jpg',
				hid: 'og:image'
			},
			{
				property: 'og:description',
				content:
					'Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.',
				hid: 'og:description'
			},

			// Apple
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
			{ name: 'apple-mobile-web-app-title', content: 'Emmanuel Béziat' },

			// Microsoft
			{
				name: 'msapplication-config',
				content: '/favicons/browserconfig.xml'
			}
		],
		link: [
			{ rel: 'shortcut icon', href: '/favicons/emmanuelb-favicon.ico' },
			{
				rel: 'apple-favicons-icon',
				sizes: '180x100',
				href: '/favicons/apple-favicons-icon.png'
			},
			{
				rel: 'mask-icon',
				href: '/favicons/safari-pinned-tab.svg',
				color: '#f77669'
			},
			{
				rel: 'icon',
				href: '/favicons/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png'
			},
			{
				rel: 'icon',
				href: '/favicons/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png'
			},
			{ rel: 'manifest', href: '/favicons/manifest.json' },
			{ rel: 'profile', href: 'http://gmpg.org/xfn/11' },
			{
				rel: 'publisher',
				href: 'https://plus.google.com/+Emmanuelbeziat-web'
			},
			{
				rel: 'alternate',
				href: '/atom.xml',
				type: 'application/atom+xml',
				title: 'Emmanuel Béziat :: Actualité du blog'
			}
		],

		noScript: [
			{ innerHTML: 'Javascript est requis pour parcourir ce site.' }
		]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#c3e88d' },

	/*
	 ** Global CSS
	 */
	css: [{ src: '~assets/fonts/fonts.styl', lang: 'stylus' }],

	/**
	 * Minification options
	 */
	minify: {
		removeEmptyAttributes: false,
		collapseWhitespace: true,
		conservativeCollapse: true,
		collapseBooleanAttributes: true,
		removeTagWhitespace: false,
		removeStyleLinkTypeAttributes: true
	},

	/**
	 * Router configuration
	 */
	router: {
		linkActiveClass: '-active',
		base: '/'
	},

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'~/plugins/filters.js',
		// '~/plugins/disqus'
	],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/axios',
		// Doc: https://github.com/nuxt-community/modules/tree/master/packages/markdownit
		'@nuxtjs/markdownit'
	],

	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/**
	 * MarkdownIt module configuration
	 */
	markdownit: {
		html: true,
		injected: true,
		breaks: true,
		typographer: true,
		langPrefix: 'language-',
		highlight: function (str, lang) {
			return ''
		},
		use: [
			'markdown-it-attrs',
			[
				'markdown-it-block-embed',
				{
					containerClassName: 'video',
					serviceClassPrefix: 'video--',
					outputPlayerSize: false,
					allowFullScreen: true
				}
			],
			[
				'markdown-it-anchor',
				{
					permalink: false,
					permalinkClass: 'icon-link post__anchor',
					permalinkSymbol: ''
				}
			],
			'markdown-it-prism',
			'markdown-it-smartarrows'
		]
	},

	/**
	 * Variables environment
	 * https://fr.nuxtjs.org/api/configuration-env/
	 */
	env: {
		api: {
			posts: `https://rest.emmanuelbeziat.com/posts`,
			refs: `https://rest.emmanuelbeziat.com/portfolio`,
			projects: `https://rest.emmanuelbeziat.com/projects`,
			github: `https://api.github.com/users/emmanuelbeziat/repos`
		}
	},

	/*
	 ** Build configuration
	 */
	build: {
		postcss: [require('autoprefixer'), require('css-mqpacker')],
		/*
		 ** You can extend webpack config here
		 */
		extend (config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}

			const urlLoader = config.module.rules.find(
				rule => rule.loader === 'url-loader'
			)
			urlLoader.test = /\.(png|jpe?g|gif)$/

			config.module.rules.push({
				test: /\.svg$/,
				loader: 'vue-svg-loader',
				exclude: /node_modules/,
				options: {
					svgo: {
						plugins: [
							{ removeDoctype: true },
							{ removeComments: true }
						]
					}
				}
			})
		},

		vendor: ['moment']
	}
}
