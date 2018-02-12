<template>
	<div class="blog">
		<article class="post">
			<header class="post__header">
				<h1 class="post__title">{{ ref.title }}</h1>

				<div class="post__infos">
					<div class="flex">
						<div class="post__tags">
							<span class="c-tag" v-for="tag in ref.tags" :key="tag">{{ tag }}</span>
						</div>

						<div class="post__tags">
							<span class="c-tag" v-for="client in ref.clients" :key="client">{{ client }}</span>
						</div>
					</div>
				</div>
			</header>

			<div class="post__content" v-html="$md.render(ref.content)"></div>

			<footer class="post__footer">
				<router-link :to="'/portfolio'" class="post__navigation--previous icon-arrow-left">Revenir au portfolio</router-link>
			</footer>

		</article>
	</div>
</template>

<script>
export default {
	name: 'portfolioSingle',

	validate ({ params }) {
		return isNaN(params.slug)
	},

	async asyncData ({ params, app }) {
		try {
			let { data } = await app.$axios.get(`${process.env.api.refs}/${params.slug}/`)
			return { ref: data }
		}
		catch (e) {
			error({
				statusCode: 204,
				message: 'No content reached'
			})
		}
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: this.ref.title,
			meta: [
				{ name: 'description', content: this.ref.description, hid: 'description' },
				{ name: 'twitter:title', content: this.ref.title, hid: 'twTitle' },
				{ name: 'twitter:url', content: 'https://www.emmanuelbeziat.com/portfolio/'+this.ref.slug, hid: 'twUrl' },
				{ name: 'twitter:description', content: this.description, hid: 'twDesc'},

				// Facebook
				{ property: 'og:title', content: this.ref.title, hid: 'ogTitle' },
				{ property: 'og:url', content: 'https://www.emmanuelbeziat.com/portfolio/'+this.ref.slug, hid: 'ogUrl' },
				{ property: 'og:description', content: this.ref.description, hid: 'ogDesc' }
			]
		}
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

@require '~assets/styles/modules/tags.styl'
</style>
