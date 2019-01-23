<template>
	<nav class="menu">
		<router-link to="/" class="menu__link" exact>Accueil</router-link>
		<router-link to="/portfolio" class="menu__link">Portfolio</router-link>
		<router-link to="/projets" class="menu__link">Projets</router-link>
		<router-link to="/blog" class="menu__link">Blog</router-link>
	</nav>
</template>

<script>
export default {
	name: 'Menu'
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.menu
	display flex
	justify-content flex-end

	@media $mq-tablet
		justify-content space-between
		position fixed
		background var(--color-background-dark)
		left 0
		right 0
		bottom 0
		z-index 50
		padding 0 rem(32px)

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
			display block
			font-family "Icons"
			transform none
			padding 0
			opacity 1
			font-size rem(16px)
			color inherit
			margin-bottom 5px
			transition .2s ease-in-out

	&::after
		content "/>"
		transform translateX(-20px)
		padding-left .1875em
		@media $mq-tablet
			display none

	&[href="/"]
		&:hover
		&:focus
			color var(--color-green)
		&::before
			@media $mq-tablet
				content "\e800"

	&[href="/portfolio"]
		&:hover
		&:focus
			color var(--color-blue)
		&::before
			@media $mq-tablet
				content "\e801"

	&[href="/projets"]
		&:hover
		&:focus
			color var(--color-yellow)
		&::before
			@media $mq-tablet
				content "\e80e"

	&[href="/blog"]
		&:hover
		&:focus
			color var(--color-red)
		&::before
			@media $mq-tablet
				content "\f27a"

.-active
	&:hover
		&::before
		&::after
			color inherit

	&[href="/"]
		color var(--color-green)

	&[href="/portfolio"]
		color var(--color-blue)

	&[href="/projets"]
		color var(--color-yellow)

	&[href="/blog"]
		color var(--color-red)

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
