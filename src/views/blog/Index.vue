<template>
	<section class="blog">
		<Search placeholder="Recherche…" label="Rechercher" v-model="searchTerms" />

		<template v-if="posts">
			<transition-group name="list" tag="div" class="post-list">
				<Post v-for="post in posts" :key="`post-${post.slug}`" :post="post" />
			</transition-group>
		</template>

		<Loader mini v-else />
	</section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePostsStore } from '@/stores/posts'
import { useHead } from '@vueuse/head'
import slug from 'slug'

import Search from '@/components/Search.vue'
import Post from '@/views/blog/Post.vue'
import Loader from '@/components/Loader.vue'

import { defineNamespace } from '@/plugins/mixins/namespace'

const searchTerms = ref('')
const postsStore = usePostsStore()

const posts = computed(() => postsStore.list.filter(post => slug(post.title.toLowerCase()).includes(slug(searchTerms.value.toLowerCase()))))

const tagsList = computed (() => {
	let tags = []
	this.posts.forEach(post => tags = [...tags, ...post.tags])
	return [...new Set(tags)]
})

const categoryList = computed (() => {
	let categories = []
	this.posts.forEach(post => categories = [...categories, ...post.categories])
	return [...new Set(categories)]
})

onMounted(() => {
	defineNamespace('blog')
})

useHead({
	title: 'Emmanuel Béziat :: Blog'
})
</script>
