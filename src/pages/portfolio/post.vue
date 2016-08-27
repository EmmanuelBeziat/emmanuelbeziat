<template>
	<article class="article">
		<header class="article__header">
			<h1 class="article__title">{{ post.title }}</h1>
		</header>
		<div class="article__content" v-linkable>{{{ post.content }}}</div>
	</article>
</template>

<script>
	import Portfolio from '../../resources/portfolio'

	module.exports = {

		/**
		 * @type {Object}
		 */
		Route: {
			waitForData: true
		},

		created: function () {
			this.fetchData()
		},

		methods: {
			fetchData: function () {
				const that = this
				const slug = that.$route.params.slug
				const response = Portfolio.getSinglePortfolio(slug).then((response) => {

					response.data.posts.forEach(function(post) {
						if (post.basename === slug) {
							that.$set('post', post)
						}
					})
				})
			}
		},

		/**
		 * @return {Object}
		 */
		data () {
			return {
				post: { }
			}
		}
	}
</script>
