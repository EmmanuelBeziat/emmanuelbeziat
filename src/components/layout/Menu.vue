<template>
	<nav class="menu" id="menu" aria-label="Navigation principale" v-once>
		<MenuItem :to="{ name: 'Home' }" label="Accueil" icon="home" />
		<MenuItem :to="{ name: 'Portfolio' }" label="Portfolio" icon="portfolio" />
		<MenuItem :to="{ name: 'Projects' }" label="Projets" icon="projects" />
		<MenuItem :to="{ name: 'Blog' }" label="Blog" icon="blog" />
		<MenuItem :to="{ name: 'Me' }" label="À propos" icon="about" />
	</nav>
</template>

<script setup>
import MenuItem from '@/components/layout/MenuItem.vue'
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/modules/transitions.styl'

.menu
	grid-area menu
	display flex
	justify-content flex-end
	@extends .animationBounce

	@media $mq-tablet
		justify-content space-between
		position fixed
		background var(--color-background-dark)
		left 0
		right 0
		bottom 0
		z-index 50
		padding 0
</style>
