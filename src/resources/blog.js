import Vue from 'vue'

module.exports = {

	url: '',

	get (params) {
		return Vue.resources(this.url).get(params)
	}
}
