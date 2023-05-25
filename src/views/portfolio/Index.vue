<template>
	<section class="showcase">
		<template v-if="references">
			<sequential-entrance animation="entranceFadeIn" delay="25" class="showcase__list">
				<Reference v-for="ref in references" :key="`ref-${ref.slug}`" :reference="ref" class="showcase__item" />
			</sequential-entrance>

			<div class="note --success">
				<div class="thanks">
					Et bien d’autres au fil des ans <small>(merci, hé ! <svg class="heart" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>)</small>
				</div>
			</div>
		</template>

		<Loader mini v-else />
	</section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'


import Reference from '@/components/Reference.vue'
import Loader from '@/components/Loader.vue'

import { usePortfolioStore } from '@/stores/portfolio'
import { defineNamespace } from '@/plugins/mixins/namespace'

const portfolioStore = usePortfolioStore()
const references = computed(() => portfolioStore.list)

onMounted(() => {
	defineNamespace('portfolio')
})

useHead({
	title: 'Portfolio'
})
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/variables.styl'
@require '../../assets/styles/mixins.styl'

.showcase__list
	display grid
	grid-template-columns repeat(auto-fit, minmax(240px, 1fr))
	gap 4px

	@media (max-width 540px)
		grid-template-columns repeat(auto-fit, minmax(180px, 1fr))

.thanks
	font-size var(--font-size-heading-4)
	@supports (content-visibility auto)
		content-visibility auto

	.heart
		fill var(--color-red)
		width 1em
		margin 0 .15em
		vertical-align baseline
		transform translateY(2px)
</style>
