<template>
	<nav :id="`access-shortcuts-wrapper-${position}`" class="skip-link" :aria-label="label">
		<a href="#content" :id="`skiplink-go-to-content-from-${position}`" class="visually-hidden visually-hidden-focusable">Aller au contenu</a>
		<a href="#menu" :id="`skiplink-go-to-menu-from-${position}`" class="visually-hidden visually-hidden-focusable">Aller au menu</a>
	</nav>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
	position: {
		type: String,
		default: 'top',
		validator: value => ['top', 'bottom'].indexOf(value) !== -1
	}
})

const label = computed(() => props.position === 'top' ? 'Accès rapide (haut de page)' : 'Accès rapide (bas de page)')
</script>

<style scoped>
.skip-link {
	position: absolute;
	z-index: 10;
}
</style>
