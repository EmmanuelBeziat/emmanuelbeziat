<template>
	<section class="posts">
		<article class="article" v-for="post in posts">
			<h1 class="article__title"><a v-link="{ name: 'blog-post', params: { slug: post.basename } }">{{ post.title }}</a></h1>
			<div class="article__date">Posté le {{ post.date | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</div>
		</article>
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
				//return Blog.get().then(response => this.$set('posts', response.data))
			}
		},

		created: function () {
			this.fetchData()
		},

		methods: {
			fetchData: function () {
				return Blog.listPosts().then(response => this.$set('posts', response.data.posts.reverse()))
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
