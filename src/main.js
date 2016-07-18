import Vue from 'vue'
import Svg from 'vue-svg-directive'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {redirects, routes} from './app/routes'
import {config, before, after} from './app/router'

Vue.use(VueHead)
Vue.use(VueRouter)
Vue.use(VueResource)
require('./app/boot')

Vue.use(Svg, {
	sprites: '/static/sprites/icons.svg',
	prefix: '',
	class: 'icon'
})

// Initializing the router with options
let Router = new VueRouter(config)
Router.map(routes)
Router.redirect(redirects)
Router.beforeEach(before)
Router.afterEach(after)

// Initializing the whole thing together
import App from './app'
Router.start(App, 'app')
