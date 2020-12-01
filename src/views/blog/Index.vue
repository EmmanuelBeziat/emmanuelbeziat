<template>
	<section class="blog">
		<template v-if="posts">
			<Search placeholder="Recherche…" label="Rechercher" v-model="searchTerms" />

			<transition-group name="list" tag="div" class="post-list">
				<Post v-for="post in posts" :key="`post-${post.slug}`" :post="post" />
			</transition-group>
		</template>
	</section>
</template>

<script>
import slug from 'slug'
import Search from '@/components/Search'
import Post from '@/views/blog/Post'

export default {
	name: 'Blog',

	data () {
		return {
			searchTerms: ''
		}
	},

	computed: {
		posts () {
			return this.$store.getters['posts/list'].filter(post => slug(post.title.toLowerCase()).includes(slug(this.searchTerms.toLowerCase())))
		},

		tagsList () {
			let tags = []
			this.posts.forEach(post => tags = [...tags, ...post.tags])
			return [...new Set(tags)]
		},

		categoryList () {
			let categories = []
			this.posts.forEach(post => categories = [...categories, ...post.categories])
			return [...new Set(categories)]
		}
	},

	components: {
		Search,
		Post
	}
}
</script>
