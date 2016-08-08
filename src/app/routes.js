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
			title: '',
			component: require('../pages/home')
		},

		'/portfolio': {
			name: 'portfolio',
			title: 'Portfolio',
			component: require('../pages/portfolio/index')
		},

		'/portfolio/:slug': {
			name: 'portfolio-item',
			component: require('../pages/portfolio/index')
		},

		'/blog': {
			name: 'blog',
			title: 'Blog',
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
