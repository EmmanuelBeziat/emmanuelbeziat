import axios from 'axios'
import { api } from '@/config'

const state = {
	portfolio: []
}

const getters = {
	list: state => state.portfolio,
	count: state => state.portfolio.length,
	getRef: state => slug => state.portfolio.find(ref => ref.slug === slug)
}

const actions = {
	async init ({ commit }) {
		const { data } = await axios.get(api.refs)
		commit('SET_PORTFOLIO', data)
	}
}

const mutations = {
	SET_PORTFOLIO (state, portfolio) {
		state.portfolio = portfolio
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
