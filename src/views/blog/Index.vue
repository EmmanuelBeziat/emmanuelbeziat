<template>
	<section class="blog">
		<Search placeholder="Recherche…" label="Rechercher" v-model="searchTerms" />

		<template v-if="posts">
			<div class="post-wrapper" ref="postList">
				<TransitionGroup name="list" tag="div" class="post-list">
					<Post v-for="post in posts" :key="`post-${post.slug}`" :post="post" />
				</TransitionGroup>
			</div>
		</template>

		<Loader mini v-else />
	</section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { usePostsStore } from '@/stores/posts'
import { useHead } from '@unhead/vue'
import slug from 'slug'
import gsap from 'gsap'

import Search from '@/components/Search.vue'
import Post from '@/components/Post.vue'
import Loader from '@/components/Loader.vue'

import { defineNamespace } from '@/plugins/mixins/namespace'
import { useTransitionComposable } from '@/plugins/composables/transition-composable'

let ctx
const postList = ref()
const searchTerms = ref('')
const postsStore = usePostsStore()

const posts = computed(() => postsStore.list.filter(post => slug(post.title.toLowerCase()).includes(slug(searchTerms.value.toLowerCase()))))

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

const { transitionState } = useTransitionComposable()
watch(
	[() => transitionState.transitionComplete, postList],
	(newValue) => {
		if (newValue && postList.value) {
			ctx = gsap.context(self => {
				const postsList = self.selector('.post')
				postsList.forEach((item, index) => {
					gsap.set(item, { autoAlpha: 0 })
					gsap.to(item, {
						autoAlpha: 1,
						scrollTrigger: {
							trigger: item,
							start: "top 10%",
						},
						delay: 0.25
					})
				})
			}, postList.value)
		}
	}, { immediate: true }
)

onMounted(() => {
	defineNamespace('blog')
})

onUnmounted(() => {
	ctx.revert()
})

useHead({
	title: 'Blog'
})
</script>

<style scoped>
.classetest {
	height: 50vh;
	background: red;
	margin-bottom: 50px;
}
</style>
