<template>
	<header class="header">
		<h1 class="header__title"><router-link to="/">Emmanuel Béziat</router-link></h1>

		<Picture />

		<SocialLinks class="social" />

		<div class="bio">
			<p>Développeur web front-end passionné de geekeries, de cinéma et de sport</p>
			<p>Je travaille actuellement chez <a href="https://www.italic.fr/">Italic</a>, une chouette <i lang="en">web-agency</i> à Paris</p>
			<p>Ex-formateur web (adoré de tous) à l’<a href="https://www.lidem.eu/">IDEM</a>, dans le sud plein de soleil</p>
		</div>

		<div class="copyright">
			<Copyright />
		</div>
	</header>
</template>

<script>
import Picture from '@/components/layout/Picture'
import SocialLinks from '@/components/layout/Social'
import Copyright from '@/components/Copyright'

export default {
	name: 'Header',

	components: {
		Copyright,
		SocialLinks,
		Picture
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.header
	padding 2rem
	background var(--color-background-dark)
	position relative
	z-index 10
	text-align center

.header__title
	margin 0
	font-size var(--font-size-heading-1)
	line-height 1
	font-weight 400

.bio
	margin 2rem 0

	@media $mq-desktop
		display none

.copyright
	@media $mq-desktop
		display none
</style>
