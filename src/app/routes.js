module.exports = {

	/**
	 * Redirects
	 * @type {Object}
	 */
	redirects: {
	},

	/**
	 * Routes
	 * @type {Object}
	 */
	routes: {
		'/': {
			name: 'home',
			title: 'Emmanuel Béziat',
			component: require('../pages/home')
		},

		'/portfolio': {
			name: 'portfolio',
			title: 'Portfolio — Emmanuel Béziat',
			component: require('../pages/portfolio/index')
		},

		'/portfolio/:slug': {
			name: 'portfolio-post',
			component: require('../pages/portfolio/post')
		},

		'/blog': {
			name: 'blog',
			title: 'Blog — Emmanuel Béziat',
			component: require('../pages/blog/index')
		},

		'/blog/:slug': {
			name: 'blog-post',
			component: require('../pages/blog/post')
		},

		'*': {
			name: 'not-found',
			title: 'Page non trouvée !',
			component: require('../pages/not-found')
		}
	}
}
