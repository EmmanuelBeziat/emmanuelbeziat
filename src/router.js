import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home/Index'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Accueil'
		}
	},
	{
		path: '/blog',
		name: 'Blog',
		component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/Index'),
		meta: {
			title: 'Blog'
		}
	},
	{
		path: '/blog/:slug',
		name: 'Post',
		component: () => import(/* webpackChunkName: "post" */ '@/views/blog/Single'),
		props: true
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: () => import(/* webpackChunkName: "portfolio" */ '@/views/portfolio/Index'),
		meta: {
			title: 'Portfolio'
		}
	},
	{
		path: '/portfolio/:slug',
		name: 'Reference',
		component: () => import(/* webpackChunkName: "ref" */ '@/views/portfolio/Single'),
		props: true
	},
	{
		path: '/projets',
		name: 'Projects',
		component: () => import(/* webpackChunkName: "projects" */ '@/views/projects/Index'),
		meta: {
			title: 'Projets'
		}
	},
	{
		path: '/moi',
		name: 'Me',
		component: () => import(/* webpackChunkName: "me" */ '@/views/Me'),
		meta: {
			title: 'À propos de moi…'
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound'),
		meta: {
			title: 'Page non trouvée !'
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	linkActiveClass: '-active',
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}

		if (to.hash) {
			return { selector: to.hash }
		}

		return { top: 0 }
	},
	routes
})

export default router
