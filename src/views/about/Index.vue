<template>
	<section class="me">
		<div class="drawing animation-bounce">
			<img :src="picture" alt="Emmanuel Béziat (Drawing by Marie-Laure Rouzier)" loading="lazy">
		</div>

		<div class="interview animation-bounce">
			<h2>Et sinon …?</h2>

			<p>J’ai pas d’idée pour me présenter.</p>

			<h3>Où est-ce que tu bosses ?</h3>
			<p>
				<img class="picture-full" src="https://images.emmanuelbeziat.com/Home-2020---01-min.jpg" alt="Home" loading="lazy">
			</p>
			<p>C’est mon bureau. Y en a plein comme ça, mais celui-là c’est le mien. 😍</p>
		</div>

		<!-- <div class="timeline animation-bounce">
			<h3>Timeline</h3>
		</div> -->

		<div class="work animation-bounce">
			<h3>Et tu fais quoi ?</h3>
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

import { defineNamespace } from '@/plugins/mixins/namespace'

import GithubCards from '@/components/GithubCards.vue'

const picture = ref(new URL(`../../assets/images/emmanuelb-draw.webp`, import.meta.url).href)
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

<style scoped>
.drawing {
  text-align: center;
  padding: 0 var(--gutter-screen-x);
  max-width: 32rem;
  margin-inline: auto;
}

.drawing img {
  display: block;
  max-width: 100%;
}

h2 {
  font: 400 var(--font-size-article-title)/1.25 var(--font-stack-heading);
}

.animation-bounce {
  opacity: 0;
}

.animation-bounce:nth-of-type(1) {
  animation-delay: .35s;
}

.animation-bounce:nth-of-type(2) {
  animation-delay: .55s;
}

.animation-bounce:nth-of-type(3) {
  animation-delay: .85s;
}
</style>
