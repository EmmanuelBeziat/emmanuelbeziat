<template>
	<div class="blog">
		<div v-if="!content">
			<module-loader></module-loader>
		</div>

		<article class="post" v-else>
			<header class="post__header">
				<h1 class="post__title">{{ title }}</h1>

				<div class="post__infos">
					<div class="post__date">Posté le <time>{{ date | moment('ddd Do MMM YYYY') }}</time></div>

					<div class="flex">
						<div class="post__tags">
							<span class="c-tag" v-for="tag in tags">{{ tag }}</span>
						</div>

						<div class="post__share">
							<module-share></module-share>
						</div>
					</div>
				</div>
			</header>

			<div class="post__content" v-html="content"></div>

			<footer class="post__footer">
				<div class="flex">
					<div class="post__tags">
						<span class="c-tag" v-for="tag in tags">{{ tag }}</span>
					</div>

					<div class="post__share">
						<module-share></module-share>
					</div>
				</div>

				<div class="post__help">
					Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank" rel="noopener">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank" rel="noopener">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank" rel="noopener">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/dashboard" target="_blank" rel="noopener">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank" rel="noopener">Alsacréations</a>…
				</div>
			</footer>

		</article>

		<div class="comments" v-if="disqus">
			<disqus :shortname="disqusShortname"></disqus>
		</div>
	</div>
</template>

<script>
import Disqus from 'vue-disqus'
import moduleShare from '../components/modules/Sharepost.vue'
import moduleLoader from '../components/modules/Loader.vue'
import md from '../app/render.js'

export default {
	name: 'blog-post',
	data () {
		return {
			content: null,
			title: null,
			description: null,
			image: null,
			date: null,
			tags: null,
			disqus: null,
			disqusShortname: process.env.SHORT_NAME
		}
	},

	components: {
		Disqus,
		moduleShare,
		moduleLoader
	},

	created: function () {
		this.getPost()
	},

	watch: {
		'$router': 'getPost'
	},

	methods: {
		getPost: function () {
			const that = this
			let basename = this.$route.params.slug

			require.ensure('../posts/articles/meta.json', (require) => {
				const posts = require('../posts/articles/meta.json')
				const getPostName = this.getPostName(posts, basename)

				require('../posts/articles' + getPostName)((post) => {
					that.content = md.render(post.rawContent),
					that.date = post.metaData.date,
					that.description = post.metaData.description,
					that.image = post.metaData.image,
					that.tags = post.metaData.tags,
					that.title = post.metaData.title,
					that.disqus = post.metaData.disqus
				})
			})
		},

		getPostName: function (posts, basename) {
			let fileName
			posts.forEach(function (post) {
				if (post.basename === basename) {
					fileName = '/' + post.path
				}
			})
			return fileName
		}
	},

	ready () {
		// Smooth Scroll
		// SmoothScroll.init()
	}
}
</script>
