<template>
	<article class="post-list__item post">
		<h1 class="post__title --small"><router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link></h1>

		<div class="post-infos flex">
			<div class="post__date">Posté le <time>{{ dateFormat(post.date, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

			<div class="tags">
				<Tag v-for="tag in post.tags" :key="`tag-${tag}`" :value="tag" />
			</div>
		</div>

		<div class="post__description">{{ post.description }}</div>
	</article>
</template>

<script>
import Tag from '@/components/Tag'
import dateFormat from '@/plugins/mixins/date'

export default {
	name: 'Post',

	mixins: [dateFormat],

	props: {
		post: {
			type: Object,
			required: true
		}
	},

	components: {
		Tag
	}
}
</script>
