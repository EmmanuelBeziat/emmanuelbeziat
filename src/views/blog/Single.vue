<template>
	<template v-if="!postsStore.loaded">
		<Loader />
	</template>

	<template v-else-if="!post">
		<NotFound />
	</template>

	<Article v-else class="blog">
		<template #title>{{ post.title }}</template>

		<template #date>Posté le <time>{{ dateFormat(post.date, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time></template>

		<template #tags>
			<sequential-entrance animation="animation-bounce" delay="125" class="tags">
				<Tag v-for="(tag, index) in post.tags" :key="`tag-${index}`" :value="tag" />
			</sequential-entrance>
		</template>

		<template #share>
			<Share />
		</template>

		<template #note>
			<Note v-if="articleIsOld" type="important">
				<strong>Article datant de plus de 5 ans</strong><br>
				Attention, cet article a été rédigé il y a une éternité à l'échelle du web. Certaines informations peuvent s'avérer obsolète.
			</Note>
		</template>

		<template #content>
			<div v-html="post.markup"></div>
		</template>

		<template #footer>
			<div class="help">
				Un problème ? Une question ? <br>Vous pouvez me contacter sur <a :href="social.bluesky" target="_blank" rel="noopener noreferrer">Bluesky</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank" rel="noopener noreferrer">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/forum/" target="_blank" rel="noopener noreferrer">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank" rel="noopener noreferrer">Alsacréations</a>…
			</div>
		</template>
	</Article>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { openGraph, social } from '@/config'
import { useRoute } from 'vue-router'
import { useSeoMeta, useHead } from '@unhead/vue'

import Article from '@/components/layouts/Article.vue'
import Share from '@/components/share/Share.vue'
import Tag from '@/components/Tag.vue'
import Note from '@/components/Note.vue'
import Loader from '@/components/loader/Loader.vue'
import NotFound from '@/views/NotFound.vue'

import { dateFormat } from '@/utilities/date'
import { isOlderThan } from '@/utilities/dateComparison'
import { usePostsStore } from '@/stores/posts'
import { defineNamespace } from '@/utilities/namespace'

const props = defineProps({
	slug: {
		type: String,
		required: true
	}
})

const route = useRoute()
const fullURL = computed(() => openGraph.url + route.fullPath)
const postsStore = usePostsStore()
const post = computed(() => postsStore.getPost(props.slug))
const articleIsOld = computed(() => isOlderThan(post.value?.date, 5))
const pageTitle = computed(() => post.value ? `${post.value.title} — Blog` : 'Blog')
const description = computed(() => post.value?.description)
const image = computed(() => post.value?.image)

onMounted(() => {
	defineNamespace('blog')
})

useHead({
	title: pageTitle,
})

useSeoMeta({
	description,
	ogTitle: pageTitle,
	ogUrl: fullURL,
	ogImage: image,
	ogDescription: description,
})
</script>

<style scoped>
.help {
	font-size: var(--font-size-xs);
	margin-top: var(--gutter-base);
}
</style>
