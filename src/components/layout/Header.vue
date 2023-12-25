<template>
	<header class="header" v-once ref="header">
		<h1 class="header__title"><router-link to="/">Emmanuel Béziat</router-link></h1>

		<Picture class="picture" />

		<SocialLinks class="social" />

		<div class="bio">
			<p>Développeur web full-stack, passionné de code optimisé et moderne. Parfois formateur.</p>
			<p>Musicien à mes heures. Sportif monté en kit. Explorateur urbain.</p>
			<p>Mon meilleur atout ? L’adaptabilité. Donnez-moi du temps et de la doc, et je suis votre dev. <i class="emoji" role="img" aria-label="Emoji de salut militaire">🫡</i></p>
		</div>

		<div class="copyright">
			<Copyright />
		</div>
	</header>
</template>

<script setup>
import Picture from '@/components/layout/Picture.vue'
import SocialLinks from '@/components/layout/Social.vue'
import Copyright from '@/components/layout/Copyright.vue'
</script>

<style lang="stylus" scoped>
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
	text-wrap balance
	@extends .animationBounce

	@media $mq-desktop
		display none

.copyright
	animation-delay .65s
	@extends .animationBounce
	@media $mq-desktop
		display none
</style>
