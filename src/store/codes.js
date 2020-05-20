import axios from 'axios'
import { api } from '@/config'

const state = {
	codes: []
}

const getters = {
	list: state => state.codes,
	count: state => state.codes.length,
	getCode: state => slug => state.codes.find(code => code.slug === slug)
}

const actions = {
	async init ({ commit }) {
		const { data } = await axios.get(api.codes)
		commit('SET_POSTS', data)
	}
}

const mutations = {
	SET_POSTS (state, codes) {
		state.codes = codes
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
