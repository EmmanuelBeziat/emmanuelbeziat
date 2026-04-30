<template>
	<section ref="sectionRef" class="me">
		<div class="drawing stagger-group" :data-delay="250">
			<picture class="stagger-item">
				<source :srcset="pictureAvif" type="image/avif">
				<source :srcset="pictureWebp" type="image/wepb">
				<img :src="pictureWebp" alt="Emmanuel Béziat (Drawing by Marie-Laure Rouzier)" loading="lazy">
			</picture>
		</div>

		<div class="interview stagger-group" :data-delay="400">
			<h2 class="stagger-item">Et sinon …?</h2>

			<p class="stagger-item">J’ai pas d'idée pour me présenter.</p>

			<h3 class="stagger-item">Où est-ce que tu bosses ?</h3>
			<p class="stagger-item">
				<img class="picture-full" src="https://images.emmanuelbeziat.com/Home-2020---01-min.jpg" alt="Home" loading="lazy">
			</p>
			<p class="stagger-item">C'est mon bureau. Y en a plein comme ça, mais celui-là c'est le mien. 😍</p>
		</div>

		<!-- <div class="timeline stagger-group" :data-delay="700">
			<h3 class="stagger-item">Timeline</h3>
		</div> -->

		<div class="work stagger-group" :data-delay="700">
			<h3 class="stagger-item">Et tu fais quoiÎ?</h3>
			<KeepAlive>
				<GithubCards align="left" />
			</KeepAlive>
		</div>
	</section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'

import { defineNamespace } from '@/utilities/namespace'

import GithubCards from '@/components/GithubCards.vue'

const pictureAvif = ref(new URL(`../../assets/images/emmanuelb-draw.avif`, import.meta.url).href)
const pictureWebp = ref(new URL(`../../assets/images/emmanuelb-draw.webp`, import.meta.url).href)
const route = useRoute()
const fullURL = computed(() => openGraph.url + route.fullPath)

const sectionRef = ref(null)

const staggerGapTime = 100 // ms entre chaque élément

onMounted(() => {
	defineNamespace('me')

	const groups = sectionRef.value.querySelectorAll('.stagger-group')
	groups.forEach(group => {
		const baseDelay = parseInt(group.dataset.delay, 10) || 0
		const items = group.querySelectorAll('.stagger-item')
		items.forEach((item, i) => {
			item.style.setProperty('--stagger-delay', `${baseDelay + (i * staggerGapTime)}ms`)
		})
	})
})

useHead({
	title: 'À propos de moi'
})

useSeoMeta({
	ogUrl: fullURL,
})
</script>

<style scoped>
.drawing {
	text-align: center;
	padding: 0 var(--gutter-screen-x);
	max-inline-size: 32rem;
	margin-inline: auto;

	img {
		display: block;
		max-width: 100%;
	}
}

h2 {
	font: 400 var(--font-size-article-title)/1.25 var(--font-stack-heading);
}

.stagger-item {
	opacity: 0;
	translate: 0 20px;
	scale: .975;
	animation: .765s var(--ease-back-out) var(--stagger-delay, 0s) forwards animation-back-slide-in;
}
</style>
