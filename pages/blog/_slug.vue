<template>
	<div class="post">
		<article class="post">
			<header class="post__header">
				<h1 class="post__title">{{ post.title }}</h1>

				<div class="post__infos">
					<div class="post__date">Posté le <time>{{ post.date | moment('ddd Do MMM YYYY') }}</time></div>

					<div class="flex">
						<div class="post__tags">
							<span class="c-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
						</div>

						<div class="post__share">
							<share/>
						</div>
					</div>
				</div>
			</header>

			<div class="post__content" v-html="$md.render(post.content)"></div>

			<footer class="post__footer">
				<div class="flex">
					<div class="post__tags">
						<span class="c-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
					</div>

					<div class="post__share">
						<share/>
					</div>
				</div>

				<div class="post__help">
					Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank" rel="noopener">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank" rel="noopener">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank" rel="noopener">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/dashboard" target="_blank" rel="noopener">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank" rel="noopener">Alsacréations</a>…
				</div>
			</footer>
		</article>
	</div>
</template>

<script>
import Share from '~/components/Share'

export default {
	name: 'blogSingle',

	validate ({ params }) {
		return isNaN(params.slug)
	},

	async asyncData ({ params, app }) {
		try {
			let { data } = await app.$axios.get(`${process.env.api.posts}/${params.slug}/`)
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


<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'
@require '~assets/styles/components/posts.styl'
@require '~assets/styles/modules/tags.styl'

.comments
	margin-top 2rem
	padding-top 2rem
	border-top 1px solid $color-separator

</style>
