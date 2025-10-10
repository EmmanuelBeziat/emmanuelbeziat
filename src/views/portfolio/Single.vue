<template>
	<template v-if="!reference">
		<NotFound />
	</template>

	<Article v-else class="showcase" :showFooterInfos="false">
		<template #title>{{ reference.title }}</template>

		<template #tags>
			<sequential-entrance animation="animation-bounce" delay="125" class="tags">
				<Tag v-for="tag in reference.tags" :key="`tag-${tag}`" :value="tag" />
			</sequential-entrance>
		</template>

		<template #clients>
			<sequential-entrance animation="animation-bounce" delay="125" class="tags">
				<Tag v-for="client in reference.clients" :key="`client-${client}`" :value="client" />
			</sequential-entrance>
		</template>

		<template #content>
			<div v-html="reference.markup"></div>
		</template>

		<template #footer>
			<nav class="post-navigation" aria-label="Navigation du portfolio">
				<Navigation type="previous" :to="{ name: 'Portfolio' }" label="Revenir au portfolio" />
			</nav>
		</template>
	</Article>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'

import Article from '@/components/layouts/Article.vue'
import Tag from '@/components/Tag.vue'
import Navigation from '@/components/BackToPage.vue'
import NotFound from '@/views/NotFound.vue'

import { usePortfolioStore } from '@/stores/portfolio'
import { defineNamespace } from '@/utilities/namespace'

const props = defineProps({
	slug: {
		type: String,
		required: true
	}
})

onMounted(() => {
	defineNamespace('portfolio')
})

const route = useRoute()
const fullURL = openGraph.url + route.fullPath
const portfolioStore = usePortfolioStore()
const reference = computed(() => portfolioStore.getRef(props.slug))

useHead({
	title: `${reference.value?.title} — Portfolio`
})

useSeoMeta({
	ogTitle: `${reference.value?.title} — Portfolio`,
	ogUrl: fullURL,
})
</script>
