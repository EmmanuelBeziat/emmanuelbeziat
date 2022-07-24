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
				Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank" rel="noopener">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank" rel="noopener">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank" rel="noopener">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/forum/" target="_blank" rel="noopener">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank" rel="noopener">Alsacréations</a>…
			</div>
		</footer>

		<Head>
			<title>Emmanuel Béziat :: {{ post.title }} — Blog</title>
			<meta property="og:title" :content="`Emmanuel Béziat :: ${post.title} — Blog`">
			<meta property="og:url" :content="fullUrl">
			<meta property="og:image" :content="post.image">
			<meta property="og:description" :content="post.description">
			<meta property="description" :content="post.description">
		</Head>
	</article>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { Head } from '@vueuse/head'

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
const fullUrl = ref(openGraph.url + route.fullPath)
const postsStore = usePostsStore()
const post = computed(() => postsStore.getPost(props.slug))

onMounted(() => {
	defineNamespace('blog')
})
</script>
