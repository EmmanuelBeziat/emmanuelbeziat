import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import BlogList from '../components/BlogPostList.vue'
import BlogPost from '../components/BlogPost.vue'
import PortfolioList from '../components/PortfolioPostList.vue'
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
		component: PortfolioList,
		children: [
			{
				path: ':slug',
				name: 'portfolio-post',
				component: {
					template: '<h2> test {{ slug }}</h2>'
				}
			}
		]
	},
	{
		path: '/blog',
		name: 'blog',
		component: BlogList,
		children: [

		]
	},
	{
		path: '/blog/:slug',
		name: 'blog-post',
		props: true,
		component: BlogPost
	},
	{
		path: '*',
		component: NotFound
	}
]

export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'site-menu__link--active',
	routes
})
