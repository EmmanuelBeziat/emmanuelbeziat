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
	},

	languages ({ commit }) {
		state.projects.forEach(project => {
			axios.get(project.languages_url).then(response => {
				return commit('SET_LANGUAGES', project.id, response.data)
			})
		})
	}
}

const mutations = {
	SET_PROJECTS (state, projects) {
		state.projects = projects.map(key => {
			return {
				id: key.id,
				name: key.name,
				html_url: key.html_url,
				description: key.description,
				created_at: key.created_at,
				updated_at: key.updated_at,
				language: key.language,
				languages_url: key.languages_url,
				stargazers: key.stargazers_count,
				license: key.license ? key.license.key : null,
				forks: key.forks_count,
				issues: key.open_issues_count
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
