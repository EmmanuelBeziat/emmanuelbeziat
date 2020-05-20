import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Blog from './views/Blog/Index'
import Portfolio from './views/Portfolio/Index'
import Projects from './views/Projects/Index'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass: '-active',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/blog',
			name: 'blog',
			component: Blog,
		},
		{
			path: '/blog/:slug',
			name: 'post',
			component: () => import(/* webpackChunkName: "post" */ './views/Blog/Post')
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: Portfolio,
		},
		{
			path: '/portfolio/:slug',
			name: 'reference',
			component: () => import(/* webpackChunkName: "ref" */ './views/Portfolio/Ref')
		},
		{
			path: '/projets',
			name: 'projects',
			component: Projects,
		},
		{
			path: '/not-found',
			name: 'not-found',
			component: NotFound
		},
		{
			path: '*',
			redirect: '/not-found'
		}
	],
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}
		else if (to.hash) {
			return {
				selector: to.hash
			}
		}
		else {
			return { x: 0, y: 0 }
		}
	}
})
