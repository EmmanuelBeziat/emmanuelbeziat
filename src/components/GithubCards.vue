<template>
	<div :class="`github-card card-${align}`">
		<img v-if="type === 'stats'" :src="card.stats" alt="Github stats" loading="lazy">
		<img v-if="type === 'languages'" :src="card.languages" alt="Github languages" loading="lazy">
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { github } from '@/config'

defineProps({
	align: {
		type: String,
		default: 'center'
	},

	type: {
		type: String,
		default: 'stats'
	}
})

const card = ref(github)
</script>

<style scoped>
@supports (content-visibility: auto) {
	.github-card {
		content-visibility: auto;
	}
}

.card-center {
	text-align: center;
}

.card-left {
	text-align: left;
}

.card-row {
	display: flex;
	align-items: start;
}

.card-column {
	display: flex;
	flex-direction: column;
}
</style>
