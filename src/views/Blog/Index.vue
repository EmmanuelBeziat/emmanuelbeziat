<template>
	<section class="blog">
		<transition mode="out-in" name="fade">
			<Loader v-if="loading" />
			<div v-else-if="error"></div>
			<div v-else>
				<Search placeholder="Recherche…" v-model="searchTerms" />

				<!-- <filters icon="icon-tag" :filters="tagsList" @on-filter="filterByTag" /> -->

				<transition-group name="list" tag="div" class="post-list">
					<article class="post-list__item post" v-for="post in filteredList" :key="post.slug">
						<h1 class="post__title --small"><router-link :to="`/blog/${post.slug}/`">{{ post.title }}</router-link></h1>

						<div class="post__infos flex">
							<div class="post__date">Posté le <time>{{ post.date | date({ year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

							<div class="post__tags">
								<Tag v-for="tag in post.tags" :key="tag" :value="tag" />
							</div>
						</div>

						<div class="post__description">{{ post.description }}</div>
					</article>
				</transition-group>
			</div>
		</transition>
	</section>
</template>

<script>
import { api } from '@/config'
import { meta } from '@/plugins/mixins/meta'
import slug from 'slug'
import Moment from 'moment'
import Loader from '@/components/loader/Loader'
import Search from '@/components/search/Search'
import Tag from '@/components/tags/Tag'
// import Filters from '@/components/filters/Filters'

export default {
	name: 'Blog',
	mixins: [meta],

	data () {
		return {
			head: {
				title: 'Blog'
			},
			posts: null,
			error: null,
			loading: true,
			searchTerms: ''
		}
	},

	mounted () {
		this.axios.get(api.posts)
			.then(response => {
				let postList = []
				response.data.forEach(item => {
					if (item.publish !== false && Moment().diff(item.date, 'days') > 1) {
						postList.push(item)
					}
				})
				this.posts = postList
			})
			.catch(error => this.error = error.message)
			.finally(() => this.loading = false)
	},

	components: {
		Search,
		Loader,
		Tag,
		// Filters
	},

	computed: {
		filteredList () {
			return this.posts.filter(post => slug(post.title.toLowerCase()).includes(slug(this.searchTerms.toLowerCase())))
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

	/* methods: {
		filterByTag (tag) {
			return tag === '' ? false : this.filteredList.filter(post => post.tags.includes(tag))
		}
	} */
}
</script>

<style lang="stylus">
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>
