<template>
	<div class="posts-list">
		<article class="article posts-list__item" v-for="post in posts">
			<h1 class="article__title"><a v-link="{ name: 'blog-post', params: { slug: post.basename } }">{{ post.title }}</a></h1>
			<div class="article__infos">
				<div class="article__date">Posté le <time>{{ post.date | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</time></div>
				<div class="article__tags">
					<span class="article__tag" v-for="tag in post.tags">{{ tag }}</span>
				</div>
			</div>
		</article>
	</div>
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
