<template>
	<ListArticle>
		<template #title>
			<router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
		</template>

		<template #date>
			Posté le <time>{{ date }}</time>
		</template>

		<template #tags>
			<Tag v-for="tag in post.tags" :key="`tag-${tag}`" :value="tag" />
		</template>

		<template #description>
			{{ post.description }}
		</template>
	</ListArticle>
</template>

<script setup>
import ListArticle from '@/components/layouts/ListArticle.vue'
import Tag from '@/components/Tag.vue'
import { dateFormat } from '@/utilities/date'

const props = defineProps({
	post: {
		type: Object,
		required: true
	}
})

const date = dateFormat(props.post.date, { year: 'numeric', month: 'long', day: 'numeric' })
</script>
