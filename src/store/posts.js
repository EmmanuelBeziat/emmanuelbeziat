import axios from 'axios'
import { api } from '@/config'
import Moment from 'moment'

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
		const filteredPosts = []

		posts.forEach(item => {
			if (item.publish !== false && Moment().diff(item.date, 'days') > 1) {
				filteredPosts.push(item)
			}
		})
		state.posts = filteredPosts
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
