import Vue from 'vue'

module.exports = {

	/**
	 * Make a get request to the blog api
	 *
	 * @param  {Object}     params
	 * @return {Promise}
	 */
	getPosts(url, params) {
		return Vue.resource(url).get(params);
	}
}
