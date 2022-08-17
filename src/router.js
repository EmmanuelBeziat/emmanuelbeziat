import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Index.vue'

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
		component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/Index.vue'),
		meta: {
			title: 'Blog'
		}
	},
	{
		path: '/blog/:slug/',
		name: 'Post',
		component: () => import(/* webpackChunkName: "post" */ '@/views/blog/Single.vue'),
		props: true,
		meta: {
			title: 'Blog'
		}
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: () => import(/* webpackChunkName: "portfolio" */ '@/views/portfolio/Index.vue'),
		meta: {
			title: 'Portfolio'
		}
	},
	{
		path: '/portfolio/:slug/',
		name: 'Reference',
		component: () => import(/* webpackChunkName: "ref" */ '@/views/portfolio/Single.vue'),
		props: true,
		meta: {
			title: 'Portfolio'
		}
	},
	{
		path: '/projets',
		name: 'Projects',
		component: () => import(/* webpackChunkName: "projects" */ '@/views/projects/Index.vue'),
		meta: {
			title: 'Projets'
		}
	},
	{
		path: '/moi',
		name: 'Me',
		component: () => import(/* webpackChunkName: "me" */ '@/views/about/Index.vue'),
		meta: {
			title: 'À propos de moi…'
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
		meta: {
			title: 'Page non trouvée !'
		}
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	// strict: true,
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
