<template>
	<article class="post portfolio">
		<header class="post__header">
			<h1 class="post__title">{{ post.title }}</h1>
		</header>
		<div class="post__content" v-linkable>{{{ post.content }}}</div>
		<footer class="post__footer">
			<a class="post__backlink" v-link="{ name: 'portfolio' }"éé><i class="icon-arrow-left"></i> Revenir au portfolio</a>
		</footer>
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
