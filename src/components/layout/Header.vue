<template>
	<header class="header" v-once ref="header">
		<h1 class="header__title"><router-link to="/">Emmanuel Béziat</router-link></h1>

		<Picture class="picture" />

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

<script setup>
import { onMounted, ref } from 'vue'
import Picture from '@/components/layout/Picture.vue'
import SocialLinks from '@/components/layout/Social.vue'
import Copyright from '@/components/Copyright.vue'

const header = ref()

onMounted(() => {
	header.value.querySelectorAll('& > *').forEach((item, index) => {
		setTimeout(() => {

		}, 125)
	})
})
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/variables.styl'
@require '../../assets/styles/mixins.styl'
@require '../../assets/styles/modules/transitions.styl'

.header
	padding 2rem
	background var(--color-background-dark)
	position relative
	z-index 10
	text-align center
	grid-area header

.header__title
	margin 0
	font-size var(--font-size-heading-1)
	line-height 1
	font-weight 400
	animation-delay .25s
	@extends .animationBounce

.picture
	animation-delay .35s
	@extends .animationBounce

.social
	animation-delay .45s
	@extends .animationBounce

.bio
	margin 2rem 0
	animation-delay .55s
	@extends .animationBounce

	@media $mq-desktop
		display none

.copyright
	animation-delay .65s
	@extends .animationBounce
	@media $mq-desktop
		display none
</style>
