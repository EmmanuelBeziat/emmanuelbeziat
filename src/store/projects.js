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
		console.log(data)
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
		state.projects = projects.map(repo => {
			return {
				id: repo.id,
				name: repo.name,
				url: repo.html_url,
				homepage: repo.homepage,
				description: repo.description,
				created_at: repo.created_at,
				updated_at: repo.updated_at,
				language: repo.language,
				languages_url: repo.languages_url,
				stargazers: repo.stargazers_count,
				watchers: repo.watchers_count,
				license: repo.license ? repo.license.key : null,
				forks: repo.forks_count,
				issues: repo.open_issues_count,
				archived: repo.archived
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
