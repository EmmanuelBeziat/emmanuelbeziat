<template>
	<article class="post" v-if="reference">
		<header class="post__header animation-bounce">
			<h1 class="post__title">{{ reference.title }}</h1>

			<div class="post-infos">
				<div class="flex">
					<sequential-entrance animation="animation-bounce" delay="125" class="tags">
						<Tag v-for="tag in reference.tags" :key="`tag-${tag}`" :value="tag" />
					</sequential-entrance>

					<sequential-entrance animation="animation-bounce" delay="150" class="tags">
						<Tag v-for="client in reference.clients" :key="`client-${client}`" :value="client" />
					</sequential-entrance>
				</div>
			</div>
		</header>

		<div class="post-content animation-fade" v-html="reference.markup" />

		<footer class="post__footer animation-bounce">
			<nav class="post-navigation" aria-label="Navigation du portfolio">
				<Navigation type="previous" :to="{ name: 'Portfolio' }" label="Revenir au portfolio" />
			</nav>
		</footer>
	</article>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'

import Tag from '@/components/tags/Tag.vue'
import Navigation from '@/components/BackToPage.vue'

import { usePortfolioStore } from '@/stores/portfolio'
import { defineNamespace } from '@/plugins/mixins/namespace'

const props = defineProps({
	slug: {
		type: String,
		required: true
	}
})

const route = useRoute()
const fullURL = ref(openGraph.url + route.fullPath)
const portfolioStore = usePortfolioStore()
const reference = computed(() => portfolioStore.getRef(props.slug))

onMounted(() => {
	defineNamespace('portfolio')
})

const updateMetaTags = () => {
	useHead({
		title: `${reference.value?.title} — Portfolio`
	})

	useSeoMeta({
		ogTitle: `${reference.value?.title} — Portfolio`,
		ogUrl: fullURL,
	})
}

watch(reference, (newReference) => {
	if (newReference) updateMetaTags()
})

updateMetaTags()
</script>
