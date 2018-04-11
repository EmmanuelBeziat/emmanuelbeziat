<template>
	<section class="blog">
		<div class="c-search">
			<input class="c-search__input" type="search" placeholder="Recherche…" v-model="search">
		</div>

		<div class="post-list">
			<article class="post-list__item" v-for="post in filteredList" :key="post.slug">
				<h1 class="post-list__title"><nuxt-link :to="'/blog/'+post.slug">{{ post.title }}</nuxt-link></h1>

				<div class="post-list__infos">
					<div class="post-list__date">Posté le <time>{{ post.date | moment('Do MMMM YYYY') }}</time></div>

					<div class="post-list__tags">
						<span class="c-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
					</div>
				</div>
			</article>
		</div>
	</section>
</template>

<script>
import slug from 'slug'

export default {
	name: 'Blog',

	asyncData ({ params, app}) {
		return app.$axios.get(process.env.api.posts)
			.then((res) => {
				return {
					posts: res.data,
					search: ''
				}
			})
	},

	computed: {
		filteredList () {
			return this.posts.filter(post => slug(post.title.toLowerCase()).includes(slug(this.search.toLowerCase())))
		}
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: 'Blog'
		}
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.post-list__item + .post-list__item
	margin-top 2.5em
	padding-top 2.5em
	border-top 1px solid $color-separator

.post-list__title
	margin 0
	font 400 $font-size-article-title-small/1.5 $font-stack-heading

	@media (max-width $breakpoint-mobile)
		line-height 1.25
		overflow auto

.post-list__infos
	font-size $font-size-article-infos
	display flex
	justify-content space-between
	align-items center

	@media (max-width $breakpoint-mobile)
		flex-direction column
		align-items flex-start

.post-list__date
	@media (max-width $breakpoint-mobile)
		margin .5em 0

.post-list__tags
	max-width 50%

	@media (max-width $breakpoint-mobile)
		max-width none

.post-list__header
	margin-bottom 1em

.post-list__content
	margin-bottom 1em

.post-list__top-link
	float right
	background $color-green
	margin-top rem(10px)
	color $color-background
	border-radius rem(2px)

	&:hover
		background $color-red
		color $color-background

	@media (min-width $breakpoint-mobile)
		display none

@require '~assets/styles/modules/tags.styl'
@require '~assets/styles/modules/search.styl'
</style>
