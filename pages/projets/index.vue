<template>
	<section class="blog">
		<div class="projet-list">
			<article class="projet-list__item" v-for="projet in projets" :key="projet.slug">
				<h1 class="projet-list__title"><nuxt-link :to="'/projets/'+projet.slug">{{ projet.title }}</nuxt-link></h1>
			</article>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Projects',

	asyncData({ params, app }) {
		return app.$axios.get(process.env.api.projects).then(res => {
			return { projets: res.data };
		});
	},

	transition(to, from) {
		if (!from) return 'slide-left';
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left';
	},

	head() {
		return {
			title: 'Projets'
		};
	}
};
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.projet-list__item + .projet-list__item
	margin-top 2.5em
	padding-top 2.5em
	border-top 1px solid $color-separator

.projet-list__title
	margin 0
	font 400 $font-size-article-title-small/1.5 $font-stack-heading

	@media (max-width $breakpoint-mobile)
		line-height 1.25
		overflow auto

.projet-list__infos
	font-size $font-size-article-infos
	display flex
	justify-content space-between
	align-items center

	@media (max-width $breakpoint-mobile)
		flex-direction column
		align-items flex-start

.projet-list__date
	@media (max-width $breakpoint-mobile)
		margin .5em 0

.projet-list__tags
	max-width 50%

	@media (max-width $breakpoint-mobile)
		max-width none

.projet-list__header
	margin-bottom 1em

.projet-list__content
	margin-bottom 1em

.projet-list__top-link
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
</style>
