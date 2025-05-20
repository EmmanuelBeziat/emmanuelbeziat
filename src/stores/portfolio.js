import { defineStore } from 'pinia'
import { fetchPortfolio } from '@/api/portfolio'

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
			try {
				this.portfolio = await fetchPortfolio()
			}
			catch (error) {
				console.error(`Store error: ${error}`)
			}
		}
	}
})
