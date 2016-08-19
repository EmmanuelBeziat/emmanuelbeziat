<template>
	<article class="article">
		<header class="article__header">
			<h1 class="article__title">{{ post.title }}</h1>

			<div class="article__infos">
				<div class="article__date">Posté le <time>{{ post.date | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</time></div>

				<div class="flex">
					<div class="article__tags">
						<span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
					</div>

					<div class="articles__share">
						<app-share></app-share>
					</div>
				</div>
			</div>
		</header>

		<div class="article__content" v-linkable>{{{ post.content }}}</div>

		<footer class="article__footer">
			<div class="articles__share">
				<app-share></app-share>
			</div>
		</footer>
	</article>
</template>

<script>
	import Blog from '../../resources/blog'
	import Prism from 'prismjs'
	import 'prismjs/plugins/show-language/prism-show-language.min.js'

	import appShare from 'components/app-share'

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
				const that = this
				const slug = that.$route.params.slug
				const response = Blog.getSinglePost(slug).then((response) => {

					response.data.posts.forEach(function(post) {
						if (post.basename === slug) {
							that.$set('post', post)
						}
					})
				})
			}
		},

		components: {
			appShare
		},

		head: {
			meta: function () {
				return [

				]
			}
		},

		/**
		 * @return {Object}
		 */
		data () {
			return {
				post: { }
			}
		},

		ready () {
			/**
			 * Ignitiate code hightlighting with PrismJS
			 */
			Prism.highlightAll()
		}
	}
</script>
