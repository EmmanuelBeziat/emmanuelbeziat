<template>
	<div class="blog">
		<div v-if="!content">
			<module-loader></module-loader>
		</div>

		<article class="post" v-else>
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

			<div class="post__content" v-html="content"></div>

			<footer class="post__footer">
				<router-link :to="{ name: 'portfolio' }" class="post__navigation--previous icon-arrow-left">Revenir au portfolio</router-link>
			</footer>

		</article>
	</div>
</template>

<script>
import moduleLoader from '../components/modules/Loader.vue'
import md from '../app/render.js'

export default {
	name: 'blog-post',
	data () {
		return {
			content: null,
			title: null,
			image: null,
			tags: null,
			clients: null
		}
	},

	components: {
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

			require.ensure('../posts/portfolio/meta.json', (require) => {
				const posts = require('../posts/portfolio/meta.json')
				const getPostName = this.getPostName(posts, basename)

				require('../posts/portfolio' + getPostName)((post) => {
					that.content = md.render(post.rawContent),
					that.clients = post.metaData.clients,
					that.tags = post.metaData.tags,
					that.title = post.metaData.title
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
