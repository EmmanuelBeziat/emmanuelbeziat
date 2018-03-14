<template>
	<section class="portfolio">
		<div class="portfolio__list">
			<router-link v-for="ref in refs" :key="ref.slug" class="portfolio__item" :to="'/portfolio/'+ref.slug" >
				<div :class="['portfolio__layer', ref.color]">
					<svg viewBox="0 0 100 100" class="portfolio__image icon">
						<use :xlink:href="'/sprite.svg#' + ref.image"></use>
					</svg>
				</div>

				<div class="portfolio__caption">
					<h2 class="portfolio__title">{{ ref.title }}</h2>
					<div class="portfolio-tags">
						<i class="icon-tag" aria-hidde="true"></i>
						<div class="portfolio-tags__list">
							<span class="portfolio-tags__item" v-for="tag in ref.tags" :key="tag">{{ tag }}</span>
						</div>
					</div>
				</div>
			</router-link>
		</div>

		<div class="c-note c-note--success">
			<div class="portfolio__thanks">
				Et bien d’autres au fil des ans <small>(merci, hé ! <i class="icon-heart"></i>)</small>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Portfolio',

	asyncData ({ params, app}) {
		return app.$axios.get(process.env.api.refs)
			.then((res) => {
				return { refs: res.data }
			})
	},
	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: 'Portfolio'
		}
	}
}
</script>


<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.portfolio__list
	display grid
	grid-template-columns 1fr 1fr 1fr
	grid-column-gap 4px
	grid-row-gap 4px

	@media (max-width $breakpoint-tablet)
		grid-template-columns 1fr 1fr

	@media (max-width $breakpoint-mobile)
		grid-template-columns 1fr

.portfolio__item
	position relative
	color $color-text

.portfolio__layer
	background $color-separator
	position relative
	height rem(240px)
	display flex
	justify-content center
	align-items center
	z-index 10
	transform-origin 50% 20px
	transition .2s ease-in-out
	backface-visibility hidden

.portfolio__image
	size rem(128px)
	fill $color-text
	backface-visibility hidden
	transition .2s ease-in-out .1s

.portfolio__caption
	z-index 5
	position absolute
	top 0
	right 0
	bottom 0
	left 0
	padding rem(20px)
	background darken($color-background, 10%)
	display flex
	flex-direction column
	justify-content flex-end
	overflow hidden
	text-align center

.portfolio__title
	margin 0 0 .5em
	line-height 1.5
	font-size rem(28px)
	font-weight 400

.portfolio__item:hover
	.portfolio__layer
		transform scale(.4) translateZ(0)
		border-radius 50%
		size rem(240px)
		margin auto

		&.blue
			background $color-blue

		&.red
			background $color-red

		&.violet
			background $color-violet

		&.yellow
			background darken($color-yellow, 10%)

		&.green
			background $color-green

		&.black
			background darken($color-grey, 50%)

	.portfolio__image
		transform scale(1.1) translateZ(0)

.portfolio-tags
	display flex
	align-items center
	justify-content center

	i
		margin-right rem(10px)

.portfolio-tags__list
	text-align left
	line-height 1.15

.portfolio-tags__item
	font-size rem(14px)
	color $color-text

	&:not(:last-child)::after
		content ", "

.portfolio__thanks
	font-size $font-size-heading-4

	.icon-heart
		color $color-red

@require '~assets/styles/modules/notes.styl'
</style>
