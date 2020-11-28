import { createStore } from 'vuex'
import posts from './store/posts'
import codes from './store/codes'
import projects from './store/projects'
import portfolio from './store/portfolio'

export default createStore({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		posts,
		codes,
		projects,
		portfolio
	}
})
