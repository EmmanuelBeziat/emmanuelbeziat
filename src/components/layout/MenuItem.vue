<template>
	<router-link class="menu__link" :to="to" v-html="icon + label" />
</template>

<script>
export default {
	name: 'MenuItem',

	props: {
		to: {
			type: Object,
			required: true
		},
		exact: {
			type: Boolean
		},
		icon: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.menu__link
	font 400 var(--font-size-menu)/1 var(--font-stack-heading)
	text-decoration none
	color var(--color-text)
	position relative

	@media $mq-tablet
		font-weight 300
		font-size rem(16px)
		text-align center
		flex 1
		padding rem(8px)

	&::before
	&::after
		display inline-block
		opacity 0
		transition .3s ease-in-out
		color var(--color-text)

	&::before
		content "<"
		transform translateX(20px)
		padding-right .125em

		@media $mq-tablet
			content none

	& >>> svg
		display none
		transform none
		padding 0
		opacity 1
		size rem(24px)
		margin 0 auto 5px
		transition .2s ease-in-out
		fill var(--color-text)

		@media $mq-tablet
			display block

	&::after
		content "/>"
		transform translateX(-20px)
		padding-left .1875em
		@media $mq-tablet
			content ""

	&[href="/"]
		&:hover
		&:focus
			color var(--color-green)

	&[href="/portfolio"]
		&:hover
		&:focus
			color var(--color-blue)

	&[href="/projets"]
		&:hover
		&:focus
			color var(--color-yellow)

	&[href="/blog"]
		&:hover
		&:focus
			color var(--color-red)

	&[href="/moi"]
		&:hover
		&:focus
			color var(--color-violet)

.-active
	&:hover
		&::before
		&::after
			color inherit

	&[href="/"]
		color var(--color-green)

		& >>> svg
			fill var(--color-green)

	&[href="/portfolio"]
		color var(--color-blue)

		& >>> svg
			fill var(--color-blue)

	&[href="/projets"]
		color var(--color-yellow)

		& >>> svg
			fill var(--color-yellow)

	&[href="/blog"]
		color var(--color-red)

		& >>> svg
			fill var(--color-red)

	&[href="/moi"]
		color var(--color-violet)

		& >>> svg
			fill var(--color-violet)

.-active
.menu__link:hover
.menu__link:focus
	&::before
	&::after
		opacity 1
		transform translateX(0)

.menu__icon
	display inline-block
	height rem(3px)
	width rem(28px)
	margin-right rem(10px)
	background var(--color-text)
	position relative
	transition .3s ease-in-out

	&::before
	&::after
	span
		content ""
		position absolute
		width inherit
		height inherit
		background inherit
		left 0
		top 0
		transition inherit

	&::before
		transform translateY(-10px)

	&::after
		transform translateY(10px)
</style>
