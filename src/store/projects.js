import axios from 'axios'
import { api } from '@/config'

const state = {
	projects: []
}

const getters = {
	list: state => state.projects,
	count: state => state.projects.length,
	getProject: state => slug => state.projects.find(project => project.slug === slug)
}

const actions = {
	async init ({ commit }) {
		const { data } = await axios.get(`${api.projects}?sort=updated`)
		commit('SET_PROJECTS', data)
	}
}

const mutations = {
	SET_PROJECTS (state, projects) {
		state.projects = projects.map(key => {
			return {
				id: key.id,
				name: key.name,
				html_url: key.html_url,
				description:  key.description,
				created_at: key.created_at,
				updated_at: key.updated_at,
				language: key.language,
				stargazers_count: key.stargazers_count
			}
		})
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
