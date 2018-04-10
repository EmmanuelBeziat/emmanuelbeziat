<template>
	<div class="post">
		<article class="post">
			<header class="post__header">
				<h1 class="post__title">{{ post.title }}</h1>

				<div class="post__infos">
					<div class="post__date">Posté le <time>{{ post.date | moment('ddd Do MMM YYYY') }}</time></div>
				</div>
			</header>

			<div class="post__content" v-html="$md.render(post.content)"></div>

			<footer class="post__footer">
				<router-link :to="'/projets'" class="post__navigation--previous icon-arrow-left"> Revenir aux projets</router-link>
			</footer>
		</article>
	</div>
</template>

<script>
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
				{ property: 'og:url', content: 'https://www.emmanuelbeziat.com/projets/' + this.post.slug, hid: 'og:url' },
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

.post
	[target="_blank"]::after
		content "\e805"
		font-family Icons
		vertical-align baseline
		position relative
		bottom 2px
		size 1em
		display inline-block

	h2, h3, h4
		position relative

		&:hover
			.post__anchor::before
				opacity 1
				transform translateX(0)

.post__title
	margin 0
	color $color-red
	font 400 $font-size-article-title/1.5 $font-stack-heading

	@media (max-width $breakpoint-mobile)
		line-height 1.25

.post__date
	font-size .8em
	color $color-yellow

	@media (max-width $breakpoint-mobile)
		margin .5em 0

.post
	.flex
		@media (max-width $breakpoint-mobile)
			flex-direction column
			align-items flex-start

.post__header
	margin-bottom 2rem
	padding-bottom 2rem
	border-bottom 1px solid $color-separator

.post__footer
	margin-top 2rem
	padding-top 2rem
	border-top 1px solid $color-separator


@require '~assets/styles/modules/tags.styl'
</style>
