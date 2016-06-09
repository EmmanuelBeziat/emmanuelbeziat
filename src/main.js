import Vue from 'vue'
import Svg from 'vue-svg-directive'
import VueRouter from 'vue-router'

import App from './App'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'

// Telling Vue to use the router
Vue.use(VueRouter)

Vue.use(Svg, {
	sprites : '/static/sprite/sprites.svg',
	prefix  : '',
	class   : 'icon'
})

// Initializing the router with options
export var router = new VueRouter({
	history: true,
	linkActiveClass: 'site-menu__link--active'
});

router.redirect({
  // redirect any not-found route to 404
  '*': '/not-found'
});

router.map({
	// Not found handler
	'/not-found': {
		component: {
			name: 'not-found',
			template: NotFound
		}
	},
	'/': {
		name: 'home',
		component: Home
	},
	'/blog': {
		name: 'blog',
		component: Articles,
		subRoutes: {
			'/article-1': {
				component: {
					template: '<div><h1>Article 1</h1></div>'
				}
			}
		}
	},
	'/portfolio': {
		name: 'portfolio',
		component: Portfolio
	}
});

// Initializing the whole thing together
router.start(App, 'app')
