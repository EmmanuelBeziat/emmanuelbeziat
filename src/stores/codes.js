import { defineStore } from 'pinia'
import { fetchCodes } from '@/api/codes'

export const useCodesStore = defineStore('codes', {
	state: () => ({
		codes: []
	}),

	getters: {
		list: state => state.codes,
		count: state => state.codes.length,
		getCode: state => slug => state.codes.find(code => code.slug === slug)
	},

	actions: {
		async fetch () {
			try {
				this.codes = await fetchCodes()
			}
			catch (error) {
				console.error(`Store error: ${error}`)
			}
		}
	}
})
