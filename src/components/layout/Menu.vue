<template>
	<nav class="menu" id="menu" aria-label="Navigation principale" v-once>
		<MenuItem :to="{ name: 'Home' }" label="Accueil">
			<HomeIcon />
		</MenuItem>

		<MenuItem :to="{ name: 'Portfolio' }" label="Portfolio">
			<PortfolioIcon />
		</MenuItem>

		<MenuItem :to="{ name: 'Projects' }" label="Projets">
			<ProjectsIcon />
		</MenuItem>

		<MenuItem :to="{ name: 'Blog' }" label="Blog">
			<BlogIcon />
		</MenuItem>

		<MenuItem :to="{ name: 'Me' }" label="À propos">
			<AboutIcon />
		</MenuItem>
	</nav>
</template>

<script setup>
import MenuItem from '@/components/layout/MenuItem.vue'
import AboutIcon from '@/assets/icons/about.svg'
import HomeIcon from '@/assets/icons/home.svg'
import BlogIcon from '@/assets/icons/blog.svg'
import ProjectsIcon from '@/assets/icons/projects.svg'
import PortfolioIcon from '@/assets/icons/portfolio.svg'
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/variables.styl'
@require '../../assets/styles/mixins.styl'
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
