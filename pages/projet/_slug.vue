<template>
	<div class="post">
		<article class="post">
			<header class="post__header">
				<h1 class="post__title">{{ post.title }}</h1>

				<div class="post__infos">
					<div class="post__date">Posté le <time>{{ post.date | moment('ddd Do MMM YYYY') }}</time></div>

					<div class="flex">
						<div class="post__share">
							<share/>
						</div>
					</div>
				</div>
			</header>

			<div class="post__content" v-html="$md.render(post.content)"></div>

			<footer class="post__footer">
				<div class="flex">
					<div class="post__share">
						<share/>
					</div>
				</div>
			</footer>
		</article>
	</div>
</template>

<script>
import Share from '~/components/Share'

export default {
	name: 'projectSingle',

	validate ({ params }) {
		return isNaN(params.slug)
	},

	async asyncData ({ params, app }) {
		try {
			let { data } = await app.$axios.get(`${process.env.api.projects}/${params.slug}/`)
			return { post: data }
		}
		catch (e) {
			error({
				statusCode: 204,
				message: 'No content reached'
			})
		}
	},

	components: {
		Disqus,
		Share
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: this.post.title,
			meta: [
				{ name: 'description', content: this.post.description, hid: 'description' },
				{ property: 'og:title', content: this.post.title, hid: 'og:title' },
				{ property: 'og:url', content: 'https://www.emmanuelbeziat.com/blog/' + this.post.slug, hid: 'og:url' },
				{ property: 'og:image', content: this.post.image, hid: 'og:image' },
				{ property: 'og:description', content: this.post.description, hid: 'og:description' }
			]
		}
	}
}
</script>
