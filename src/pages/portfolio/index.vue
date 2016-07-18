<template>
	<section>
		<h1>Portfolio</h1>

		<div v-for="portfolio in portfolios">
			<article class="portfolio">
				<h1 class="portfolio__title"><a v-link="{ name: 'portfolio-item', params: { slug: portfolfio.slug } }">{{ portfolio.title }}</a></h1>
			</article>
		</div>
	</section>
</template>

<script>
	import Blog from '../../resources/portfolio'

	module.exports = {

		/**
		 * @type {Object}
		 */
		Route: {
			waitForData: true,

			/**
			 * Fetch route data
			 * @param  {Object} transition
			 * @return {Promis}
			 */
			data (transition) {
				return Blog.get().then(response => this.$set('portfolios', response.data))
			}
		},

		/**
		 * @return {Object}
		 */
		data () {
			return {
				posts: []
			}
		}
	}
</script>
