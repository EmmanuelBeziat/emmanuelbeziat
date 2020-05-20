import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import posts from '@/store/posts'
import portfolio from '@/store/portfolio'
import projects from '@/store/projects'
import codes from '@/store/codes'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		posts,
		portfolio,
		projects,
		codes
	}
})
