<template>
	<header class="header">
		<h1 class="header__title"><nuxt-link to="/">Emmanuel Béziat</nuxt-link></h1>

		<img class="header__picture" src="~assets/img/emmanuelb.jpg" alt="Emmanuel Béziat" width="220" height="220">

		<div class="social">
			<a :href="social.twitter" class="social__link social__link--twitter">
				<i class="social__icon icon-twitter" aria-hidden="true"></i><span class="sr-only">Twitter</span>
			</a>
			<a :href="social.facebook" class="social__link social__link--facebook">
				<i class="social__icon icon-facebook" aria-hidden="true"></i><span class="sr-only">Facebook</span>
			</a>
			<a :href="social.github" class="social__link social__link--github">
				<i class="social__icon icon-github" aria-hidden="true"></i><span class="sr-only">Github</span>
			</a>
			<a :href="social.linkedin" class="social__link social__link--linkedin">
				<i class="social__icon icon-linkedin" aria-hidden="true"></i><span class="sr-only">LinkedIn</span>
			</a>
			<a :href="social.codepen" class="social__link social__link--codepen">
				<i class="social__icon icon-codepen" aria-hidden="true"></i><span class="sr-only">Codepen</span>
			</a>
		</div>

		<div class="header__bio">
			<p>jeune développeur web perpignanais passionné de geekeries</p>
			<p>je travaille chez <a href="http://www.italic.fr/">Italic</a>, une chouette web-agency à paris</p>
			<p>et je suis également formateur web à l’<a href="http://www.lidem.eu/">IDEM</a>, dans le sud plein de soleil</p>
		</div>

		<div class="header__copyright">
			<copyright/>
		</div>
	</header>
</template>

<script>
import Copyright from '~/components/Copyright'

import IconTwitter from '~/assets/img/icons/social/twitter.svg'
import IconFacebook from '~/assets/img/icons/social/facebook.svg'
import IconGithub from '~/assets/img/icons/social/github.svg'
import IconLinkedin from '~/assets/img/icons/social/linkedin.svg'
import IconCodepen from '~/assets/img/icons/social/codepen.svg'

export default {
	name: 'Header',
	data () {
		return {
			social: {
				twitter: 'https://twitter.com/EmmanuelBeziat',
				facebook: 'https://www.facebook.com/EmmanuelBeziat',
				github: 'https://github.com/EmmanuelBeziat',
				linkedin: 'https://www.linkedin.com/in/emmanuel-b-54242949',
				codepen: 'http://codepen.io/EmmanuelBeziat/'
			}
		}
	},

	components: {
		Copyright,
		IconTwitter,
		IconFacebook,
		IconGithub,
		IconLinkedin,
		IconCodepen
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.header
	padding 2rem
	background darken($color-background, 10%)
	width $size-header
	min-width $size-header
	position relative
	z-index 10
	text-align center

	@media (max-width $breakpoint-tablet)
		width auto

.header__title
	margin 0
	font-size $font-size-heading-1
	line-height 1
	font-weight 400

.header__bio
	margin 2rem 0

	@media (max-width $breakpoint-tablet)
		display none

.header__picture
	border-radius 50%
	vertical-align top
	margin 2rem auto

	@media (max-width $breakpoint-tablet)
		display none

.header__copyright
	@media (max-width $breakpoint-tablet)
		display none

.social
	display flex
	flex-flow row wrap
	justify-content space-between

	@media (max-width $breakpoint-tablet)
		justify-content center
		margin-top 1rem

.social__link
	display block
	size 3rem
	padding .5em
	background darken($color-background, 25%)
	border-radius 2px
	margin-bottom 4px
	transition .5s ease-out
	overflow hidden

	&::after
		display none

	&:hover
	&:focus
		transition .2s ease-out

	@media (max-width $breakpoint-tablet)
		margin-left 4px
		&:first-child
			margin-left 0

brand-icon(social__link--twitter, $color-brand-twitter)
brand-icon(social__link--facebook, $color-brand-facebook)
brand-icon(social__link--google-plus, $color-brand-google-plus)
brand-icon(social__link--linkedin, $color-brand-linkedin)
brand-icon(social__link--codepen, $color-brand-codepen)
brand-icon(social__link--github, $color-brand-github)
brand-icon(social__link--codepen, $color-brand-codepen)

/*
.social__icon
	display block
	fill $color-text
	size 100%
*/

.social__icon
	color $color-text
	font-size rem(28px)
	text-align center
	vertical-align middle
	line-height 1

	&::before
		vertical-align middle

</style>
