<template>
	<nav class="menu" id="menu" aria-label="Navigation principale" v-once>
		<MenuItem :to="{ name: 'Home' }" label="Accueil">
			<path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
		</MenuItem>

		<MenuItem :to="{ name: 'Portfolio' }" label="Portfolio">
			<path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"/>
		</MenuItem>

		<MenuItem :to="{ name: 'Projects' }" label="Projets">
			<path d="M204,279.7c5,5,13.1,5,18.1,0l9.1-9c5-5,5-13.1,0-18.1L202.6,224l28.6-28.6c5-5,5-13.1,0-18.1l-9-9c-5-5-13.1-5-18.1,0 L157.4,215c-5,5-5,13.1,0,18.1L204,279.7z M280.8,270.7l9,9c5,5,13.1,5,18.1,0l46.7-46.7c5-5,5-13.1,0-18.1L308,168.3 c-5-5-13.1-5-18.1,0l-9,9.1c-5,5-5,13.1,0,18.1l28.5,28.6l-28.6,28.6C275.8,257.6,275.8,265.7,280.8,270.7L280.8,270.7z M499.2,403.2h-194c-0.6,15.9-11.8,25.6-26.2,25.6h-48.6c-15,0-26.4-14-26.2-25.6H12.8C5.7,403.2,0,408.9,0,416v12.8 C0.1,457,23,479.9,51.2,480h409.6c28.2-0.1,51.1-23,51.2-51.2V416C512,408.9,506.3,403.2,499.2,403.2z M460.8,108.8 c-0.1-21.2-17.2-38.3-38.4-38.4H89.6c-21.2,0.1-38.3,17.2-38.4,38.4v268.8h409.6V108.8z M409.6,326.4H102.4V121.6h307.2V326.4z"/>
		</MenuItem>

		<MenuItem :to="{ name: 'Blog' }" label="Blog">
			<path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/>
		</MenuItem>

		<MenuItem :to="{ name: 'Me' }" label="À propos">
			<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/>
		</MenuItem>
	</nav>
</template>

<script setup>
import MenuItem from '@/components/layout/MenuItem.vue'
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
