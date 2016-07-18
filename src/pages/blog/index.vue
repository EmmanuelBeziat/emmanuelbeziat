<template>
	<section>
		<h1>Liste d'articles (blog)</h1>

		<div v-for="post in posts">
			<article class="article">
				<h1 class="article__title"><a v-link="{ name: 'blog-post', params: { slug: post.slug } }">{{ post.title }}</a></h1>
				<div class="article__date">{{ post.published_at | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</div>
			</article>
		</div>
	</section>
</template>

<script>
	import Blog from '../../resources/blog'

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
				return Blog.get().then(response => this.$set('posts', response.data))
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
