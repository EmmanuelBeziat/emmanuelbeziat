<template>
	<nav class="menu">
		<nuxt-link to="/" class="menu__link" exact>Accueil</nuxt-link>
		<nuxt-link to="/portfolio" class="menu__link">Portfolio</nuxt-link>
		<nuxt-link to="/projets" class="menu__link">Projets</nuxt-link>
		<nuxt-link to="/blog" class="menu__link">Blog</nuxt-link>
	</nav>
</template>

<script>
export default {
	name: 'Menu'
};
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.menu
	display flex
	justify-content flex-end

	@media (max-width $breakpoint-mobile)
		justify-content space-between
		position fixed
		background darken($color-background, 10%)
		left 0
		right 0
		bottom 0
		z-index 50
		padding 0 rem(32px)

.menu__link
	font 400 $font-size-menu/1 $font-stack-heading
	text-decoration none
	color $color-text
	position relative

	@media (max-width $breakpoint-mobile)
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
		color $color-text

	&::before
		content "<"
		transform translateX(20px)
		padding-right .125em

		@media (max-width $breakpoint-mobile)
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
		@media (max-width $breakpoint-mobile)
			display none

	&[href="/"]
		&:hover
		&:focus
			color $color-green
		&::before
			@media (max-width $breakpoint-mobile)
				content "\e800"

	&[href="/portfolio"]
		&:hover
		&:focus
			color $color-blue
		&::before
			@media (max-width $breakpoint-mobile)
				content "\e801"

	&[href="/projets"]
		&:hover
		&:focus
			color $color-yellow
		&::before
			@media (max-width $breakpoint-mobile)
				content "\e80e"

	&[href="/blog"]
		&:hover
		&:focus
			color $color-red
		&::before
			@media (max-width $breakpoint-mobile)
				content "\f27a"

.-active
	&:hover
		&::before
		&::after
			color inherit

	&[href="/"]
		color $color-green

	&[href="/portfolio"]
		color $color-blue

	&[href="/projets"]
		color $color-yellow

	&[href="/blog"]
		color $color-red

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
	background $color-text
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
