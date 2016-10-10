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
			component: require('../components/Home')
		},

		'/portfolio': {
			name: 'portfolio',
			title: 'Portfolio — Emmanuel Béziat',
			component: require('../components/PortfolioPostList')
		},

		'/portfolio/:slug': {
			name: 'portfolio-post',
			component: require('../components/PortfolioPost')
		},

		'/blog': {
			name: 'blog',
			title: 'Blog — Emmanuel Béziat',
			component: require('../components/BlogPostList')
		},

		'/blog/:slug': {
			name: 'blog-post',
			component: require('../components/BlogPost')
		},

		'*': {
			name: 'not-found',
			title: 'Page non trouvée !',
			component: require('../components/NotFound')
		}
	}
}
