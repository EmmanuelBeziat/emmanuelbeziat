<template>
	<section class="showcase">
		<template v-if="references">
			<sequential-entrance animation="animationFade" delay="50" class="showcase__list">
				<Reference v-for="ref in references" :key="`ref-${ref.slug}`" :reference="ref" class="showcase__item" />
			</sequential-entrance>

			<div class="note --success">
				<div class="thanks">
					Et bien d’autres au fil des ans <small>(merci, hé ! <Icon name="heart" class="heart" />)</small>
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
import Loader from '@/components/loader/Loader.vue'
import Icon from '@/components/icon/Icon.vue'


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

<style scoped>
.showcase__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 4px;
}
@media (width <= 540px) {
  .showcase__list {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}
.thanks {
  font-size: var(--font-size-heading-4);
}
@supports (content-visibility: auto) {
  .thanks {
    content-visibility: auto;
  }
}
.thanks .heart {
  fill: var(--color-red);
  width: 1em;
  margin: 0 0.15em;
  vertical-align: baseline;
  transform: translateY(2px);
}

</style>
