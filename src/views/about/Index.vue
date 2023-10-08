<template>
	<section class="me">
		<div class="drawing">
			<img :src="picture" alt="Emmanuel Béziat (Drawing by Marie-Laure Rouzier)" loading="lazy">
		</div>

		<div class="interview">
			<h2>Et sinon …?</h2>

			<p>J’ai pas d’idée pour me présenter.</p>

			<h3>Où est-ce que tu bosses ?</h3>
			<p>
				<img src="https://images.emmanuelbeziat.com/Home-2020---01-min.jpg" alt="Home" loading="lazy">
			</p>
			<p>C’est mon bureau. Y en a plein comme ça, mais celui-là c’est le mien. 😍</p>
		</div>

		<div class="work">
			<h3>Et tu fais quoi ?</h3>
			<KeepAlive>
				<GithubCards align="left" />
			</KeepAlive>
			<p>En gros, surtout du Javascript. Parfois avec Vue.js, parfois sans.</p>
		</div>

		<div class="play">
			<h2>À quoi tu joues ? 🎮</h2>
			<p>
				<img src="https://i2.trueachievements.com/infog-story/760992.png?v=2" alt="Xbox" loading="lazy">
			</p>
		</div>
	</section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'

import { defineNamespace } from '@/plugins/mixins/namespace'

import GithubCards from '@/components/GithubCards.vue'

const picture = ref(new URL(`../../assets/img/emmanuelb-draw.webp`, import.meta.url).href)
const route = useRoute()
const fullURL = computed(() => openGraph.url + route.fullPath)

onMounted(() => {
	defineNamespace('me')
})

useHead({
	title: 'À propos de moi'
})

useSeoMeta({
	ogUrl: fullURL,
})
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/modules/transitions.styl'

.drawing
	text-align center
	padding 0 2rem
	max-width 38rem
	margin auto

	img
		vertical-align top
		max-width 100%

h2
	font 400 var(--font-size-article-title)/1.25 var(--font-stack-heading)

div
	opacity 0
	@extends .animationBounce
	@supports (content-visibility auto)
		content-visibility auto

.interview
	animation-delay .35s

.work
	animation-delay .55s

.play
	animation-delay .85s
</style>
