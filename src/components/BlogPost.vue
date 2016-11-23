<template>
	<div class="blog">
		<div v-if="$loadingRouteData">
			<module-loader></module-loader>
		</div>

		<article class="post" v-if="!$loadingRouteData">
			<header class="post__header">
				<h1 class="post__title">{{ title }}</h1>

				<div class="post__infos">
					<div class="post__date">Posté le <time>{{ date | moment 'ddd Do MMM YYYY' }}</time></div>

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

			<div class="post__content" v-linkable>{{{ content }}}</div>

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
					Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/dashboard" target="_blank">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank">Alsacréations</a>…
				</div>
			</footer>

		</article>

		<div class="comments" v-if="!$loadingRouteData" v-if="disqus">
			<disqus :shortname="disqusShortname"></disqus>
		</div>
	</div>
</template>

<script>
import Disqus from 'vue-disqus'
import moduleShare from '../components/modules/Sharepost.vue'
import moduleLoader from '../components/modules/Loader.vue'
import SmoothScroll from 'smooth-scroll'
import Prism from 'prismjs'
import 'prismjs/plugins/show-language/prism-show-language.min.js'
import 'prismjs/components/prism-bash.min.js'

const md = require('markdown-it')({
	html: true,
	breaks: true,
	linkify: true,
	highlight: function (str, lang) {
		setTimeout(function () {
			Prism.highlightAll()
		}, 10)
		// Hacky ugly stuff to ensure that even if the connexion is slow, the highlighting is done
		// TODO: Find a better solution
		setTimeout(function () {
			Prism.highlightAll()
		}, 250)
		return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' + md.utils.escapeHtml(str) + '</code></pre>'
	}
})
.use(require('markdown-it-attrs'))
.use(require('markdown-it-block-embed'), {
	containerClassName: 'video',
	serviceClassPrefix: 'video--',
	outputPlayerSize: false,
	allowFullScreen: true
})
.use(require('markdown-it-anchor'), {
	permalink: false,
	permalinkClass: 'icon-link post__anchor',
	permalinkSymbol: ''
})

module.exports = {
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
				inner: this.title,
				separator: '—'
			}
		},
		meta: function () {
			return [
				{ property: 'description', content: this.description, id: 'description' },
				{ property: 'og:title', content: this.title, id: 'ogTitle' },
				{ property: 'og:url', content: document.URL, id: 'ogUrl' },
				{ property: 'og:image', content: this.image, id: 'ogImage' },
				{ property: 'og:description', content: this.description, id: 'ogDescription' },
				{ property: 'twitter:title', content: this.title, id: 'twTitle' },
				{ property: 'twitter:url', content: document.URL, id: 'twUrl' },
				{ property: 'twitter:image', content: this.image, id: 'twImage' },
				{ property: 'twitter:description', content: this.description, id: 'twDescription' }
			]
		}
	},

	route: {
		data (transition) {
			const that = this
			let interval
			let basename = transition.to.params.slug

			require.ensure('../posts/articles/meta.json', (require) => {
				const posts = require('../posts/articles/meta.json')
				const getPostName = this.getPostName(posts, basename)

				require('../posts/articles' + getPostName)((post) => {
					transition.next({
						content: md.render(post.rawContent),
						date: post.metaData.date,
						description: post.metaData.description,
						image: post.metaData.image,
						tags: post.metaData.tags,
						title: post.metaData.title,
						disqus: post.metaData.disqus
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
	},

	ready () {
		// Smooth Scroll
		SmoothScroll.init()
	}
}
</script>
