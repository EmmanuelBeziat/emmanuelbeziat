<template>
	<a :href="url" :class="`social__item --${name.toLowerCase()}`" :aria-label="name">
			<slot />
	</a>
</template>

<script setup>
defineProps({
	name: {
		type: String,
		required: true
	},

	url: {
		type: String,
		required: true
	}
})
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/variables.styl'
@require '../../assets/styles/mixins.styl'

.social__item
	display block
	width 3rem
	aspect-ratio 1 / 1
	color var(--color-text)
	background var(--color-background-dark)
	padding .55em
	border-radius 50%
	transition var(--transition-slow) ease-out
	overflow hidden

	&:hover
	&:focus
		background var(--bg-social-link)
		transition var(--transition-xfast) ease-out

		:deep(svg)
			transform scale(.95)

	&.--twitter
		--bg-social-link $color-brand-twitter
	&.--facebook
		--bg-social-link $color-brand-facebook
	&.--instagram
		--bg-social-link $color-brand-instagram
	&.--codepen
		--bg-social-link $color-brand-codepen
	&.--github
		--bg-social-link $color-brand-github
	&.--linkedin
		--bg-social-link $color-brand-linkedin
	&.--youtube
		--bg-social-link $color-brand-youtube

	:deep(svg)
		fill currentColor
		transition var(--transition-fast) ease-in-out
</style>
