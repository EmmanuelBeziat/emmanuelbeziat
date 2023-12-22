<template>
	<section class="showcase">
		<template v-if="references">
			<sequential-entrance animation="animationFade" delay="50" class="showcase__list">
				<Reference v-for="ref in references" :key="`ref-${ref.slug}`" :reference="ref" class="showcase__item" />
			</sequential-entrance>

			<div class="note --success">
				<div class="thanks">
					Et bien d’autres au fil des ans <small>(merci, hé ! <HeartIcon class="heart" />)</small>
				</div>
			</div>
		</template>

		<Loader mini v-else />
	</section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'

import Reference from '@/components/Reference.vue'
import Loader from '@/components/Loader.vue'

import HeartIcon from '@/assets/icons/heart.svg'

import { usePortfolioStore } from '@/stores/portfolio'
import { defineNamespace } from '@/plugins/mixins/namespace'

const route = useRoute()
const portfolioStore = usePortfolioStore()
const references = computed(() => portfolioStore.list)
const fullURL = computed(() => openGraph.url + route.fullPath)

onMounted(() => {
	defineNamespace('portfolio')
})

useHead({
	title: 'Portfolio'
})

useSeoMeta({
	ogUrl: fullURL,
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
