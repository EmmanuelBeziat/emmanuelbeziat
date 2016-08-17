import Vue from 'vue'

module.exports = {

	/**
	 * @type {String}
	 */
	articles: 'static/posts/articles/articles.json',

	/**
	 * Make a get request to the blog api
	 *
	 * @param  {Object}     params
	 * @return {Promise}
	 */
	listPosts(params) {
		return Vue.resource(this.articles).get(params);
	},

	getSinglePost(post, params) {
		return Vue.resource('../' + this.articles).get(params);
	}
}
