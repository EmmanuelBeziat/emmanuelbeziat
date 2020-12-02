<template>
	<section class="blog">
		<Search placeholder="Recherche…" label="Rechercher" v-model="searchTerms" />

		<template v-if="posts">
			<transition-group name="list" tag="div" class="post-list">
				<Post v-for="post in posts" :key="`post-${post.slug}`" :post="post" />
			</transition-group>
		</template>

		<Loader v-else />
	</section>
</template>

<script>
import slug from 'slug'
import Search from '@/components/Search'
import Post from '@/views/blog/Post'
import Loader from '@/components/Loader'

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
		Post,
		Loader
	}
}
</script>
