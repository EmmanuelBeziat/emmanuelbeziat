import Vue from 'vue'
import App from './App'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'
import VueRouter from 'vue-router'

// Telling Vue to use the router
Vue.use(VueRouter)

// Initializing the router with options
export var router = new VueRouter({
	history: true
});

// Redirect certain routes to other routes


// Define your routes here.
// NOTE: You'd normally do something
// like require('./home/index.vue') for the component
router.map({
	// Not found handler
	'*': {
		component: {
			template: NotFound
		}
	},
	'/': {
		component: Home
	},
	'/blog': {
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
		component: Portfolio
	}
});

// Initializing the whole thing together
router.start(App, 'app')
