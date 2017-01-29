import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/test',
		name: 'home',
		components: Home
	}
]

export default new VueRouter({
	mode: 'history',
	routes
})
