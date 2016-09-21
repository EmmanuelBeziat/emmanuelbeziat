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
      component: require('../components/portfolio/PostList')
    },

    '/portfolio/:slug': {
      name: 'portfolio-post',
      component: require('../components/portfolio/Post')
    },

    '/blog': {
      name: 'blog',
      title: 'Blog — Emmanuel Béziat',
      component: require('../components/blog/PostList')
    },

    '/blog/:slug': {
      name: 'blog-post',
      component: require('../components/blog/Post')
    },

    '*': {
      name: 'not-found',
      title: 'Page non trouvée !',
      component: require('../components/NotFound')
    }
  }
}
