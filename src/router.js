import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass: '-active',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/components/views/Home')
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('@/components/views/Blog/Index'),
		},
		{
			path: '/blog/:slug',
			name: 'post',
			component: () => import(/* webpackChunkName: "post" */ './views/Blog/Post')
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: () => import('@/components/views/Portfolio/Index'),
		},
		{
			path: '/portfolio/:slug',
			name: 'reference',
			component: () => import(/* webpackChunkName: "ref" */ './views/Portfolio/Ref')
		},
		{
			path: '/projets',
			name: 'projects',
			component: () => import('@/components/views/Projects/Index'),
		},
		{
			path: '/not-found',
			name: 'not-found',
			component: () => import('@/components/views/NotFound')
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

		if (to.hash) {
			return { selector: to.hash }
		}

		return { x: 0, y: 0 }
	}
})
