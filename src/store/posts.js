import axios from 'axios'
import { api } from '@/config'

const state = {
	posts: []
}

const getters = {
	list: state => state.posts,
	count: state => state.posts.length,
	getPost: state => slug => state.posts.find(post => post.slug === slug)
}

const actions = {
	async init ({ commit }) {
		const { data } = await axios.get(api.posts)
		commit('SET_POSTS', data)
	}
}

const mutations = {
	SET_POSTS (state, posts) {
		state.posts = posts.filter(item => item.publish !== false)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
