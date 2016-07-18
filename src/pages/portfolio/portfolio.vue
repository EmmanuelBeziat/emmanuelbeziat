<template>
	<article class="article">
		<header class="article__header">
			<h1 class="article__title">{{ post.title }}</h1>
		</header>
		<div class="article__content" v-linkable>{{{ post.content_html }}}</div>
	</article>
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
			 * @return {Promise}
			 */
			data (transition) {
				return Blog.get().then(response => this.$set('post', response.data))
			}
		},

		/**
		 * @return {Object}
		 */
		data () {
			return () {
				return {
					post: { }
				}
			}
		}
	}
</script>
