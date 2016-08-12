import Vue from 'vue'

module.exports = {

	/**
	 * @type {String}
	 */
	url: 'static/posts/articles/articles.json',

	/**
	 * Make a get request to the blog api
	 *
	 * @param  {Object}     params
	 * @return {Promise}
	 */
	listPosts(params) {
		return Vue.resource(this.url).get(params);
	},

	getSinglePost(params) {
		return Vue.resource('../' + this.url).get(params);
	}
}
