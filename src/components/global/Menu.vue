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
	justify-content: end;

	@media (width > 768px) {
		margin-bottom: 6rem;
	}

	@media (width <= 768px) {
		justify-content: space-between;
		position: fixed;
		background: var(--color-back-dark);
		inset: auto 0 0;
		z-index: 50;
		will-change: transform;
		padding: 0;
		transition: translate var(--timing-xfast) var(--ease-spring);

		@starting-style {
			translate: 0 100%;
		}
	}
}

.menu :deep(.menu-item) {
	&:nth-child(1) {
		--appearance-delay: .4s;
	}

	&:nth-child(2) {
		--appearance-delay: .35s;
	}

	&:nth-child(3) {
		--appearance-delay: .3s;
	}

	&:nth-child(4) {
		--appearance-delay: .25s;
	}

	&:nth-child(5) {
		--appearance-delay: .2s;
	}
}
</style>
