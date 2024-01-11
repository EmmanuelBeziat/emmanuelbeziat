<template>
	<div :class="`github-card card-${align}`">
		<img :src="card.stats" alt="github stats" loading="lazy" v-if="cards.stats">
		<img :src="card.languages" alt="Github stats" loading="lazy" v-if="cards.languages">
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

	cards: {
		type: Object,
		default: () => {
			return {
				stats: true,
				languages: true
			}
		}
	}
})

const card = ref(github)
</script>

<style scoped>
.github-card {
  margin-bottom: 1rem;
}

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
  align-items: flex-start;
}

.card-column {
  display: flex;
  flex-direction: column;
}
</style>
