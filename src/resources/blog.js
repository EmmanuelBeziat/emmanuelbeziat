import Vue from 'vue'

module.exports = {
	url: 'static/posts/the-lottery.json',
	get(params) {
		return Vue.resource(this.url).get(params);
	}
}
