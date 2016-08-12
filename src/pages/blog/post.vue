<template>
	<article class="article">
		<header class="article__header">
			<h1 class="article__title">{{ post.title }}</h1>
			<div class="article__infos">
				<div class="article__date">Posté le <time>{{ post.date | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</time></div>
				<div class="article__tags">
					<span class="article__tag" v-for="tag in post.tags">{{ tag }}</span>
				</div>
			</div>
		</header>
		<div class="article__content" v-linkable>{{{ post.content }}}</div>
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
				//return Blog.get().then(response => this.$set('post', response.data.post))
			}
		},

		created: function () {
			this.fetchData()
		},

		methods: {
			fetchData: function () {
				const slug = this.$route.params.slug
				const response = Blog.getSinglePost().then(response => this.$set('post', response.data.post))

				console.log(response.data)
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
