import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home/Index'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/blog',
		name: 'Blog',
		component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/Index')
	},
	{
		path: '/blog/:slug',
		name: 'Post',
		component: () => import(/* webpackChunkName: "post" */ '@/views/blog/Post')
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: () => import(/* webpackChunkName: "portfolio" */ '@/views/portfolio/Index')
	},
	{
		path: '/portfolio/:slug',
		name: 'Reference',
		component: () => import(/* webpackChunkName: "ref" */ '@/views/portfolio/Ref')
	},
	{
		path: '/projets',
		name: 'Projects',
		component: () => import(/* webpackChunkName: "projects" */ '@/views/projects/Index')
	},
	{
		path: '/moi',
		name: 'Me',
		component: () => import(/* webpackChunkName: "me" */ '@/views/Me')
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	linkActiveClass: '-active',
	routes
})

export default router
