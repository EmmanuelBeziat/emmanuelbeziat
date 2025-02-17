import { defineStore } from 'pinia'
import { api } from '@/config'

export const useProjectsStore = defineStore('projects', {
	state: () => ({
		projects: []
	}),

	getters: {
		list: state => state.projects,
		count: state => state.projects.length,
		getProject: state => slug => state.projects.find(project => project.slug === slug)
	},

	actions: {
		async fetch () {
			await fetch(`${api.projects}?sort=update`)
				.then(response => response.json())
				.then(data => {
					this.projects = data
						.filter(repo => !repo.archived)
						.map(repo => {
							return {
								id: repo.id,
								name: repo.name,
								url: repo.html_url,
								homepage: repo.homepage,
								description: repo.description,
								created_at: repo.created_at,
								updated_at: repo.updated_at,
								pushed_at: repo.pushed_at,
								language: repo.language,
								languages_url: repo.languages_url,
								stargazers: repo.stargazers_count,
								watchers: repo.watchers_count,
								license: repo.license ? repo.license.key : null,
								forks: repo.forks_count,
								issues: repo.open_issues_count,
								archived: repo.archived
							}
						}).sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
				})
				.catch(error => console.error(`Store error: ${error}`))
		},

		languages () {
			this.projects.forEach(project => {
				// axios.get(project.languages_url).then(response => '')
			})
		}
	}
})
