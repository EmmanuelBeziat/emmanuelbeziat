<template>
	<article class="post" v-if="reference">
		<header class="post__header">
			<h1 class="post__title">{{ reference.title }}</h1>

			<div class="post-infos">
				<div class="flex">
					<div class="tags">
						<Tag v-for="tag in reference.tags" :key="`tag-${tag}`" :value="tag" />
					</div>

					<div class="tags">
						<Tag v-for="client in reference.clients" :key="`client-${client}`" :value="client" />
					</div>
				</div>
			</div>
		</header>

		<div class="post-content" v-html="reference.markup" />

		<footer class="post__footer">
			<nav class="post-navigation" aria-label="Navigation du portfolio">
				<Navigation type="previous" :to="{ name: 'Portfolio' }" label="Revenir au portfolio" />
			</nav>
		</footer>
	</article>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@vueuse/head'

import Tag from '@/components/Tag.vue'
import Navigation from '@/components/Navigation.vue'

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

useHead({
	title: `${reference.value?.title} — Portfolio`
})

useSeoMeta({
	ogTitle: `${reference.value?.title} — Portfolio`,
	ogUrl: fullURL,
})
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/variables.styl'
@require '../../assets/styles/mixins.styl'
@require '../../assets/styles/components/posts.styl'
</style>
