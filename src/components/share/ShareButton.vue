<template>
	<button @click="$emit('on-click', type)" :class="`c-share--${icon}`">
		<i :class="`icon-${icon} c-share__icon`" aria-hidden="true" />
		<span class="sr-only">{{ name }}</span>
	</button>
</template>

<script>
export default {
	name: 'ShareButton',

	props: {
		type: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

[class^="c-share"]
	display inline-block
	size rem(36px)
	padding .5em
	background var(--color-background-darker)
	border-radius 2px
	transition .5s ease-out
	overflow hidden
	border 0
	cursor pointer
	outline 0

	&:hover
	&:focus
		transition .2s ease-out

[class^="c-share"] + [class^="c-share"]
	margin-left rem(4px)

brand-icon(c-share--twitter, var(--color-brand-twitter))
brand-icon(c-share--facebook, var(--color-brand-facebook))
brand-icon(c-share--linkedin, var(--color-brand-linkedin))
brand-icon(c-share--link, var(--color-violet))
brand-icon(c-share--share, var(--color-blue))

.c-share__icon
	color var(--color-text)
	line-height 1
	font-size rem(18px)

	&::before
		vertical-align middle
</style>
