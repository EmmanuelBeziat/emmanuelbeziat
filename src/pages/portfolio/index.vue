<template>
	<div class="portfolio-list">
		<article class="portfolio-list__item" v-for="post in portfolio">
			<h1 class="post-list__title"><a v-link="{ name: 'portfolio-post', params: { slug: post.basename } }">{{ post.title }}</a></h1>
		</article>
	</div>
</template>

<script>
	import Post from '../../resources/post'

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
				return Post.getPost('static/posts/portfolio/portfolio.json').then(response => this.$set('portfolio', response.data.posts.reverse()))
			}
		},

		/**
		 * @return {Object}
		 */
		data () {
			return {
				portfolio: []
			}
		}
	}
</script>
