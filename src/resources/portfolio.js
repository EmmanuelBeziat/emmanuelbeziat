import Vue from 'vue'

module.exports = {

	/**
	 * @type {String}
	 */
	portfolio: 'static/posts/portfolio/portfolio.json',

	/**
	 * Make a get request to the blog api
	 *
	 * @param  {Object}     params
	 * @return {Promise}
	 */
	listPortfolio(params) {
		return Vue.resource(this.portfolio).get(params);
	},

	getSinglePortfolio(post, params) {
		return Vue.resource('../' + this.portfolio).get(params);
	}
}
