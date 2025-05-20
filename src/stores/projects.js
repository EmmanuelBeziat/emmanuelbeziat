import { defineStore } from 'pinia'
import { fetchProjects } from '@/api/projects'

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
			try {
				this.projects = await fetchProjects()
			}
			catch (error) {
				console.error(`Store error: ${error}`)
			}
		},

		/* languages () {
			this.projects.forEach(project => {
				// axios.get(project.languages_url).then(response => '')
			})
		} */
	}
})
