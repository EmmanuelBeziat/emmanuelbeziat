<template>
	<article class="post-list__item post">
		<h1 class="post__title --small"><router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link></h1>

		<div class="post-infos flex">
			<div class="post__date">Posté le <time>{{ date }}</time></div>

			<div class="tags">
				<Tag v-for="tag in post.tags" :key="`tag-${tag}`" :value="tag" />
			</div>
		</div>

		<div class="post__description">{{ post.description }}</div>
	</article>
</template>

<script setup>
import Tag from '@/components/Tag.vue'
import { dateFormat } from '@/plugins/mixins/date'

const props = defineProps({
	post: {
		type: Object,
		required: true
	}
})

const date = dateFormat(props.post.date, { year: 'numeric', month: 'long', day: 'numeric' })
</script>

<style lang="stylus" scoped>
/* @import '../assets/styles/modules/transitions.styl'
.post
	@extends .animation-back-slide-in */
</style>
