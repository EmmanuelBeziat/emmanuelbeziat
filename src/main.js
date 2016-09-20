import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

import { redirects, routes } from './app/routes'
import { config, before, after } from './app/router'

import svg from 'vue-svg-directive'

Vue.use(VueHead)
Vue.use(VueRouter)

Vue.use(svg, {
  sprites: './src/assets/icons/sprite.svg',
  prefix: '',
  class: 'icon'
})

require('./app/boot')

// Initialize router with options
const Router = new VueRouter(config)

Router.map(routes)
Router.redirect(redirects)
Router.beforeEach(before)
Router.afterEach(after)

// Initialize the whole thing
import App from './app'
Router.start(App, 'app')
