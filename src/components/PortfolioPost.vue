<template>
	<div class="blog">
		<div v-if="$loadingRouteData">
			<module-loader></module-loader>
		</div>

		<article class="post portfolio" v-if="!$loadingRouteData">
			<header class="post__header">
				<h1 class="post__title">{{ title }}</h1>

				<div class="post__infos">
					<div class="flex">
						<div class="post__tags">
							<span class="c-tag" v-for="tag in tags">{{ tag }}</span>
						</div>

						<div class="post__tags">
							<span class="c-tag" v-for="client in clients">{{ client }}</span>
						</div>
					</div>
				</div>
			</header>

			<div class="post__content" v-linkable>{{{ content }}}</div>

			<footer class="post__footer">
				<a class="post__navigation post__navigation--previous icon-arrow-left" v-link="{ name: 'portfolio', activeClass: '' }">Revenir au portfolio</a>
			</footer>

		</article>
	</div>
</template>

<script>
import moduleLoader from '../components/modules/Loader.vue'

var md = require('markdown-it')({
	html: true,
	breaks: true,
	linkify: true
})
.use(require('markdown-it-attrs'))
.use(require('markdown-it-block-embed'), {
	containerClassName: 'video',
	serviceClassPrefix: 'video--',
	outputPlayerSize: false,
	allowFullScreen: true
})

module.exports = {
	data () {
		return {
			content: null,
			title: null,
			tags: null,
			clients: null
		}
	},

	components: {
		moduleLoader
	},

	methods: {
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

	head: {
		title: function () {
			return {
				inner: this.title + ' [Portfolio]',
				separator: '—'
			}
		}
	},

	route: {
		data (transition) {
			const that = this
			let interval
			let basename = transition.to.params.slug

			require.ensure('../posts/portfolio/meta.json', (require) => {
				const posts = require('../posts/portfolio/meta.json')
				const getPostName = this.getPostName(posts, basename)

				require('../posts/portfolio' + getPostName)((post) => {
					transition.next({
						content: md.render(post.rawContent),
						clients: post.metaData.clients,
						tags: post.metaData.tags,
						title: post.metaData.title
					})
				})
			})

			interval = setInterval(function () {
				if (that.title !== null) {
					clearInterval(interval)
					that.$emit('updateHead')
				}
			}, 100)
		}
	}
}
</script>
