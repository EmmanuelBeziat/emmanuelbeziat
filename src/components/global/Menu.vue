<template>
	<nav v-once id="menu" class="menu animation-bounce" aria-label="Navigation principale">
		<MenuItem :to="{ name: 'Home' }" label="Accueil" icon="home" />
		<MenuItem :to="{ name: 'Portfolio' }" label="Portfolio" icon="portfolio" />
		<MenuItem :to="{ name: 'Projects' }" label="Projets" icon="projects" />
		<MenuItem :to="{ name: 'Blog' }" label="Blog" icon="blog" />
		<MenuItem :to="{ name: 'Me' }" label="À propos" icon="about" />
	</nav>
</template>

<script setup>
import MenuItem from '@/components/global/MenuItem.vue'
</script>

<style scoped>
.menu {
	grid-area: menu;
	display: flex;
	justify-content: flex-end;

	@media (width > 768px) {
		margin-bottom: 6rem;
	}

	@media (width <= 768px) {
		justify-content: space-between;
		position: fixed;
		background: var(--color-surface-dark);
		inset: auto 0 0;
		z-index: 50;
		padding: 0;
		will-change: transform;
	}
}
</style>
