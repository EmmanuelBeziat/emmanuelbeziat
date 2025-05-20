<template>
	<section class="blog">
		<Search v-model="searchTerms" placeholder="Recherche…" label="Rechercher" />

		<template v-if="posts.length">
			<sequential-entrance animation="animation-fade" delay="100" class="post-list">
				<Post v-for="post in posts" :key="`post-${post.slug}`" :post="post" />
			</sequential-entrance>
		</template>

		<NoContent v-else />
	</section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { usePostsStore } from '@/stores/posts'
import { useHead, useSeoMeta } from '@unhead/vue'
import slug from 'slug'

import NoContent from '@/components/loader/NoContent.vue'
import Search from '@/components/Search.vue'
import Post from '@/components/Post.vue'

import { defineNamespace } from '@/utilities/namespace'

const searchTerms = ref('')
const postsStore = usePostsStore()

const posts = computed(() => postsStore.list.filter(post => slug(post.title.toLowerCase()).includes(slug(searchTerms.value.toLowerCase()))))
const route = useRoute()
const fullURL = computed(() => openGraph.url + route.fullPath)

/* const tagsList = computed (() => {
	let tags = []
	this.posts.forEach(post => tags = [...tags, ...post.tags])
	return [...new Set(tags)]
})

const categoryList = computed (() => {
	let categories = []
	this.posts.forEach(post => categories = [...categories, ...post.categories])
	return [...new Set(categories)]
}) */

onMounted(() => {
	defineNamespace('blog')
})

useHead({
	title: 'Blog'
})

useSeoMeta({
	ogUrl: fullURL,
})
</script>

<style scoped>
.post-list {
	display: grid;
}
</style>
