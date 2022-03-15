<template>
	<a :href="url" :class="`social__item --${name.toLowerCase()}`" :aria-label="name">
		<svg role="img" viewBox="0 0 24 24">
			<title>{{ name }}</title>
			<slot />
		</svg>
	</a>
</template>

<script>
export default {
	name: 'SocialItem',

	props: {
		name: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.social__item
	display block
	width 3rem
	aspect-ratio 1 / 1
	color var(--color-text)
	background var(--color-background-darker)
	padding .5em
	border-radius 2px
	transition .5s ease-out
	overflow hidden

	&:hover
	&:focus
		background var(--bg-social-link)
		transition .2s ease-out

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

	svg
		fill currentColor
</style>
