import { nextTick } from 'vue'
import { createRouter, createWebHistory, START_LOCATION } from 'vue-router'
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
		component: () => import('@/views/blog/Index.vue'),
		meta: {
			title: 'Blog'
		}
	},
	{
		path: '/blog/:slug/',
		name: 'Post',
		component: () => import('@/views/blog/Single.vue'),
		props: true,
		meta: {
			title: 'Blog'
		}
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: () => import('@/views/portfolio/Index.vue'),
		meta: {
			title: 'Portfolio'
		}
	},
	{
		path: '/portfolio/:slug/',
		name: 'Reference',
		component: () => import('@/views/portfolio/Single.vue'),
		props: true,
		meta: {
			title: 'Portfolio'
		}
	},
	{
		path: '/projets',
		name: 'Projects',
		component: () => import('@/views/projects/Index.vue'),
		meta: {
			title: 'Projets'
		}
	},
	{
		path: '/moi',
		name: 'Me',
		component: () => import('@/views/about/Index.vue'),
		meta: {
			title: 'À propos de moi…'
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue'),
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
		return savedPosition || (to.hash ? { el: to.hash } : { top: 0 })
	},
	routes
})

let finishViewTransition

/**
 * Wraps route changes in a view transition when the browser supports it.
 * The navigation waits until the old page has been captured, and the transition
 * waits until the new page has been rendered.
 * Entrance animations are paused (via the `is-navigating` class) until the transition
 * ends, as some browsers (Firefox) don't play them inside the new page snapshot.
 */
router.beforeResolve((to, from) => {
	if (!document.startViewTransition || from === START_LOCATION || to.path === from.path) return

	const root = document.documentElement
	root.classList.add('is-navigating')

	return new Promise(resolve => {
		const transition = document.startViewTransition(() => new Promise(done => {
			finishViewTransition = done
			resolve()
		}))

		transition.finished.finally(() => root.classList.remove('is-navigating'))
	})
})

router.afterEach(async () => {
	if (!finishViewTransition) return

	await nextTick()
	finishViewTransition()
	finishViewTransition = undefined
})

export default router
