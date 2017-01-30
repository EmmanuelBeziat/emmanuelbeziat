import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import BlogList from '../components/BlogPostList.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		title: 'Portfolio — Emmanuel Béziat',
		component: Home,
		children: [
			{
				path: ':slug',
				name: 'portfolio-post',
				component: {
					template: '<h2> test {{ slug }}</h2>'
				}
			},
			{
				path: '*',
				title: 'Page non trouvée !',
				component: NotFound
			}
		]
	},
	{
		path: '/blog',
		name: 'blog',
		title: 'Blog — Emmanuel Béziat',
		component: BlogList,
		children: [
			{
				path: ':slug',
				name: 'blog-post',
				component: {
					template: '<h2> test{{ slug }}</h2>'
				}
			},
			{
				path: '*',
				title: 'Page non trouvée !',
				component: NotFound
			}
		]
	},
	{
		path: '*',
		title: 'Page non trouvée !',
		component: NotFound
	}
]

export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'site-menu__link--active',
	routes
})
