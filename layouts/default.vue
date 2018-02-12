<template>
	<div class="site">
		<ui-header/>

		<div class="site-content">
			<ui-menu/>
			<main class="main">
				<nuxt/>
			</main>
		</div>

		<ui-footer/>
	</div>
</template>

<script>
import UiHeader from '~/components/ui/Header.vue'
import UiMenu from '~/components/ui/Menu.vue'
import UiFooter from '~/components/ui/Footer.vue'

export default {
	components: {
		UiHeader,
		UiMenu,
		UiFooter
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

*
*::before
*::after
	box-sizing inherit

::selection
	background $color-blue
	color $color-text
	text-shadow 0 1px 0 darken($color-blue, 50%)

@require '~assets/styles/vendors/normalize.styl'

html
	box-sizing border-box

body
	margin 0
	font 400 $font-size-base/1.5em $font-stack-common
	background $color-background
	color $color-text

h1
h2
h3
	font-family $font-stack-heading
	font-weight 200
	margin 2em 0 .75em
	line-height 1

h2
	font-size $font-size-heading-2
	color $color-green

h3
	font 700 $font-size-heading-3/1.5 $font-stack-common

// Links
a
	background-color transparent
	-webkit-text-decoration-skip objects
	transition .2s ease-in-out
	color $color-green
	text-decoration none

	&:hover
	&:focus
		color $color-yellow

img
	max-width 100%
	border-style none

// Quotes
blockquote
	position relative
	margin 2rem 0
	padding-left 4rem
	font 400 italic $font-size-quotes/1.5em $font-stack-common

blockquote::before
	content "“"
	position absolute
	left 0
	top 2rem
	font-size 6em
	color lighten($color-background, 25%)

q
	font-style italic
	color $color-yellow
	quotes "« " " »"

kbd
pre
code
	font-family $font-stack-code

.flex
	display flex
	justify-content space-between
	align-items center

.site
	min-height $size-viewport-height
	display flex
	flex-direction row
	align-items stretch
	overflow-x hidden

	@media (max-width $breakpoint-tablet)
		flex-direction column
		padding-bottom rem(80px)

.site-content
	padding 2em
	width $size-content
	margin 0 auto

	@media (max-width $breakpoint-tablet)
		min-width 100%
		width auto

.main
	margin 6rem auto 4rem

	@media (max-width $breakpoint-tablet)
		margin 2rem auto

@require '~assets/styles/vendors/prism.styl'

@require '~assets/styles/helpers.styl'
</style>
