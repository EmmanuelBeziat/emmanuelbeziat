<template>
	<router-link class="showcase__item" :to="`/portfolio/${reference.slug}/`">
		<div :class="['showcase__layer', reference.color]" v-html="reference.image" />

		<div class="showcase__caption">
			<h2 class="showcase__title">{{ reference.title }}</h2>

			<div class="portfolio-tags">
				<svg class="portfolio-tags__icon" width="1em" viewBox="0 0 24 24">
					<path d="M18.7,10.9l-7.9-7.9c-0.3-0.3-0.8-0.5-1.3-0.5H1.8C0.8,2.4,0,3.2,0,4.2v7.7c0,0.5,0.2,0.9,0.5,1.3l7.9,7.9
					c0.7,0.7,1.8,0.7,2.5,0l7.7-7.7C19.4,12.7,19.4,11.6,18.7,10.9L18.7,10.9z M4.2,8.4c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8
					S6,5.6,6,6.6S5.2,8.4,4.2,8.4z M23.5,13.4l-7.7,7.7c-0.7,0.7-1.8,0.7-2.5,0l0,0l6.5-6.5c0.6-0.6,1-1.5,1-2.4c0-0.9-0.4-1.7-1-2.4
					l-7.4-7.4h1.8c0.5,0,0.9,0.2,1.3,0.5l7.9,7.9C24.2,11.6,24.2,12.7,23.5,13.4L23.5,13.4z"/>
				</svg>

				<div class="showcase-tags__list">
					<span class="showcase-tags__item" v-for="tag in reference.tags" :key="`tag-${tag}`">{{ tag }}</span>
				</div>
			</div>
		</div>
	</router-link>
</template>

<script setup>
defineProps({
	reference: {
		type: Object,
		required: true
	}
})
</script>

<style lang="stylus" scoped>
@require '../assets/styles/variables.styl'
@require '../assets/styles/mixins.styl'

.showcase__item
	opacity 0
	position relative
	color var(--color-text)
	background var(--color-background-dark)
	@supports (content-visibility auto)
		content-visibility auto
	@media (max-width 480px)
		pointer-events none
.showcase__layer
	background var(--color-separator)
	pointer-events none
	position relative
	color var(--color-text)
	display flex
	justify-content center
	align-items center
	z-index 10
	transform-origin 50% 20px
	transition .2s ease-in-out
	backface-visibility hidden
	aspect-ratio 1 / 1

	& :deep(svg)
		width rem(128px)
		fill currentColor
		aspect-ratio 1 / 1
		backface-visibility hidden
		transition .2s ease-in-out .1s

		@media (max-width 803px)
			width calc(60%)

.showcase__caption
	pointer-events none
	z-index 5
	position absolute
	top auto
	right 0
	bottom 0
	left 0
	padding 1rem
	// background var(--color-background-dark)
	display flex
	flex-direction column
	justify-content flex-end
	overflow hidden
	text-align center
	opacity 0
	visibility hidden
	transform translateY(10px)
	transition .25s ease-in-out 0s

.showcase__title
	margin 0 0 .35em
	line-height 1
	font-size rem(28px)
	font-weight 400

.showcase__item:hover
	.showcase__layer
		transform scale(.4) translateZ(0)
		border-radius 50%
		// width rem(240px)
		aspect-ratio 1 / 1
		margin auto
		background var(--showcase-color)

		&.blue
			--showcase-color var(--color-blue)

		&.red
			--showcase-color var(--color-red)

		&.violet
			--showcase-color var(--color-violet)

		&.yellow
			--showcase-color var(--color-yellow)

		&.green
			--showcase-color var(--color-green)

		&.black
			--showcase-color darken($color-grey, 50%)

	.showcase__image
		transform scale(1.2)
		// transform translate(0, -60px) scale(.6)

	.showcase__caption
		opacity 1
		visibility visible
		transform translateY(0)
		transition .25s ease-in-out .1s

.showcase-tags
	display flex
	align-items center
	justify-content center

	i
		margin-right rem(10px)

.showcase-tags__list
	text-align left
	line-height 1.15

.showcase-tags__item
	font-size rem(14px)
	color var(--color-text)

	&:not(:last-child)::after
		content ", "

.portfolio-tags
	display flex

.portfolio-tags__icon
	width 1em
	aspect-ratio 1 / 1
	fill var(--color-yellow)
	margin-right 10px
</style>
