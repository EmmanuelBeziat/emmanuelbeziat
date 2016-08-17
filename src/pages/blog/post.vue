<template>
	<article class="article">
		<header class="article__header">
			<h1 class="article__title">{{ post.title }}</h1>
			<div class="article__infos">
				<div class="article__date">Posté le <time>{{ post.date | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</time></div>
			</div>
		</header>
		<div class="article__content" v-linkable>{{{ post.content }}}</div>
		<footer class="article__footer">
			<div class="article__tags">
				<span class="article__tag" v-for="tag in post.tags">{{ tag }}</span>
			</div>
			<div class="articles__share social-share">
				<a href="" class="social-share__link social-share__link--twitter"><svg v-svg class="icon social__icon" sprite="twitter"></svg><span class="sr-only">Twitter</span></a>
				<a href="" class="social-share__link social-share__link--facebook"><svg v-svg class="icon social__icon" sprite="facebook"></svg><span class="sr-only">Facebook</span></a>
				<a href="" class="social-share__link social-share__link--google-plus"><svg v-svg class="icon social__icon" sprite="google-plus"></svg><span class="sr-only">Google+</span></a>
				<a href="" class="social-share__link social-share__link--linkedin"><svg v-svg class="icon social__icon" sprite="linkedin"></svg><span class="sr-only">LinkedIn</span></a>
			</div>
		</footer>
	</article>
</template>

<script>
	import Blog from '../../resources/blog'
	import Prism from 'prismjs'

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

		/**
		 * @return {Object}
		 */
		data () {
			return {
				post: { }
			}
		},

		ready () {
			Prism.highlightAll()
		}
	}
</script>
