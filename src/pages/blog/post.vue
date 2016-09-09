<template>
	<article class="post">
		<header class="post__header">
			<h1 class="post__title">{{ post.title }}</h1>

			<div class="post__infos">
				<div class="post__date">Posté le <time>{{ post.date | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</time></div>

				<div class="flex">
					<div class="post__tags">
						<span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
					</div>

					<div class="posts__share">
						<app-share></app-share>
					</div>
				</div>
			</div>
		</header>

		<div class="post__content" v-linkable>{{{ post.content }}}</div>

		<footer class="post__footer">
			<div class="flex">
				<div class="post__tags">
					<span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
				</div>

				<div class="posts__share">
					<app-share></app-share>
				</div>
			</div>

			<div class="post__help">
				Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/dashboard" target="_blank">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank">Alsacréations</a>…
			</div>
		</footer>

		<div class="comments">
			<disqus shortname="emmanuelbeziat"></disqus>
		</div>
	</article>
</template>

<script>
	import Post from '../../app/resources/post'
	import Disqus from 'vue-disqus'
	import SmoothScroll from 'smooth-scroll'
	import Prism from 'prismjs'
	import 'prismjs/plugins/show-language/prism-show-language.min.js'
	import 'prismjs/components/prism-bash.min.js'

	import appShare from 'components/app-share'

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
				const response = Post.getPosts('../static/posts/articles/articles.json', slug).then((response) => {

					response.data.posts.forEach(function(post) {
						if (post.basename === slug) {
							that.$set('post', post)
						}
					})
				})
			}
		},

		components: {
			appShare,
			Disqus
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
			setTimeout(function() {
				Prism.highlightAll()
			}, 10)

			/**
			 * Enable smooth anchors scroll
			 */
			SmoothsScroll.init()
		}
	}
</script>
