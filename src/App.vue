<template>
	<div class="site">
		<Header />

		<div class="site-content">
			<SkipLinks position="top" />

			<Menu />

			<main id="content" class="main" tabindex="-1">
				<RouterView v-slot="{ Component }">
					<Transition mode="out-in" :name="$route.meta.transition || 'fade'">
						<component :is="Component" />
					</Transition>
				</RouterView>
			</main>

			<SkipLinks position="bottom" />
		</div>

		<Footer />
	</div>
</template>

<script setup>
import { openGraph } from '@/config'
import { useCodesStore } from './stores/codes'
import { usePostsStore } from './stores/posts'
import { usePortfolioStore } from './stores/portfolio'
import { useProjectsStore } from './stores/projects'
import { RouterView } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'

import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'
import Menu from '@/components/global/Menu.vue'
import SkipLinks from '@/components/global/SkipLinks.vue'
// import ReloadPWA from '@/components/ReloadPWA.vue'

useCodesStore().fetch()
usePostsStore().fetch()
usePortfolioStore().fetch()
useProjectsStore().fetch()

useHead({
	title: 'Hello World',
	titleTemplate: (title) => `${openGraph.title} :: ${title}`,
})

useSeoMeta({
	description: openGraph.description,
	ogDescription: openGraph.description,
	ogImage: `${openGraph.url}${openGraph.image}`,
	ogUrl: openGraph.url,
	ogLocale: 'fr',
})
</script>

<style scoped>
.site {
	min-height: 100dvh;
	overflow-x: clip;
	display: grid;
	grid-template: "header content" / 20rem auto;

	@media (width <= 1120px) {
		grid-template: "header" "content" "footer";
	}

	@media (width <= 768px) {
		padding-bottom: 80px;
	}
}

.site-content {
	padding: var(--gutter-screen-y, 2rem) var(--gutter-screen-x, 2rem);
	width: min(50rem, 100dvw);
	margin-inline: auto;
	grid-area: content;
}

.main {
	margin: 0 auto 2rem;
	outline: 0;
}
</style>
