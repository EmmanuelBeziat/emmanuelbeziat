<template>
	<article class="post" v-if="post">
		<header class="post__header">
			<h1 class="post__title">{{ post.title }}</h1>

			<div class="post-infos">
				<div class="post__date">Posté le <time>{{ dateFormat(post.date, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

				<div class="flex">
					<div class="tags">
						<Tag v-for="(tag, index) in post.tags" :key="`tag-${index}`" :value="tag" />
					</div>

					<Share />
				</div>
			</div>
		</header>

		<div class="post-content" v-html="post.markup" />

		<footer class="post__footer">
			<div class="flex">
				<div class="tags">
					<Tag v-for="(tag, index) in post.tags" :key="`tag-${index}`" :value="tag" />
				</div>

				<Share />
			</div>

			<div class="post__help">
				Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank" rel="noopener noreferrer">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank" rel="noopener noreferrer">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank" rel="noopener noreferrer">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/forum/" target="_blank" rel="noopener noreferrer">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank" rel="noopener noreferrer">Alsacréations</a>…
			</div>
		</footer>
	</article>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { useSeoMeta, useHead } from '@vueuse/head'

import Share from '@/components/share/Share.vue'
import Tag from '@/components/Tag.vue'

import { dateFormat } from '@/plugins/mixins/date'
import { usePostsStore } from '@/stores/posts'
import { defineNamespace } from '@/plugins/mixins/namespace'

const props = defineProps({
	slug: {
		type: String,
		required: true
	}
})

const route = useRoute()
const fullURL = ref(openGraph.url + route.fullPath)
const postsStore = usePostsStore()
const post = computed(() => postsStore.getPost(props.slug))

onMounted(() => {
	defineNamespace('blog')
})

useHead({
	// title: post.value ? `${post.value.title} — Blog` : 'Article — Blog'
	title: `${post.value?.title} — Blog`
})

useSeoMeta({
	description: post.value?.description,
	ogTitle: `${post.value?.title} — Blog`,
	ogUrl: fullURL,
	ogImage: post.value?.image,
	ogDescription: post.value?.description,
})
</script>
