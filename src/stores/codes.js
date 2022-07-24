import { defineStore } from 'pinia'
import { api } from '@/config'

export const useCodesStore = defineStore({
	id: 'codes',

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
			await fetch(api.codes)
				.then(response => response.json())
				.then(data => { this.codes = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
