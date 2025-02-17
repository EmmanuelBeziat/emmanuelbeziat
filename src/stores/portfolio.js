import { defineStore } from 'pinia'
import { api } from '@/config'

export const usePortfolioStore = defineStore('portfolio', {
	state: () => ({
		portfolio: []
	}),

	getters: {
		list: state => state.portfolio,
		count: state => state.portfolio.length,
		getRef: state => slug => state.portfolio.find(ref => ref.slug === slug)
	},

	actions: {
		async fetch () {
			await fetch(api.refs)
				.then(response => response.json())
				.then(data => { this.portfolio = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
