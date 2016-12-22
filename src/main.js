// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import { redirects, routes } from './app/routes'
import { config, before, after } from './app/router'

Vue.use(VueRouter)

const Router = new VueRouter(config)

Router.map(routes)
Router.redirect(redirects)
Router.beforeEach(before)
Router.afterEach(after)

import App from './app'
Router.start(App, '#app')
