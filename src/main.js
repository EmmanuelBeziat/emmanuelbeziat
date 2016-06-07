import Vue from 'vue'
import App from './App'
import Home from './pages/Home'
import Articles from './pages/Articles'
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
		component: {
			template: "<h1>Home</h1>"
		}
	},
	'/blog': {
		component: {
			template: "<h1>Articles</h1>"
		}
	},
	'/portfolio': {
		component: {
			template: "<h1>Portfolio</h1>"
		}
	}
});

// Initializing the whole thing together
router.start(App, 'app')
