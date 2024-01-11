<template>
	<div class="site">
		<Header />

		<div class="site-content">
			<SkipLinks position="top" />

			<Menu />

			<main class="main" id="content" tabindex="-1">
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

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Menu from '@/components/layout/Menu.vue'
import SkipLinks from '@/components/layout/SkipLinks.vue'
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

