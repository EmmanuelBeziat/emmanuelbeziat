<template>
	<section class="blog">
		<transition mode="out-in" name="fade">
			<Loader v-if="loading" />
			<div v-else-if="error"></div>
			<div v-else>
				<Search placeholder="Recherche…" v-model="searchTerms" />

				<div class="post-list">
					<article class="post-list__item" v-for="post in filteredList" :key="post.slug">
						<h1 class="post-list__title"><router-link :to="`/blog/${post.slug}/`">{{ post.title }}</router-link></h1>

						<div class="post-list__infos">
							<div class="post-list__date">Posté le <time>{{ post.date | date({ year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

							<div class="post-list__tags">
								<Tag v-for="tag in post.tags" :key="tag" :value="tag" />
							</div>
						</div>

						<div class="post-list__description">{{ post.description }}</div>
					</article>
				</div>
			</div>
		</transition>
	</section>
</template>

<script>
import { api } from '@/config'
import slug from 'slug'
import Moment from 'moment'
import Loader from '@/components/loader/Loader'
import Search from '@/components/search/Search'
import Tag from '@/components/tags/Tag'

export default {
	name: 'Blog',

	data () {
		return {
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
		Tag
	},

	computed: {
		filteredList () {
			return this.posts.filter(post => slug(post.title.toLowerCase()).includes(slug(this.searchTerms.toLowerCase())))
		}
	},

	head: {
		title: {
			inner: 'Blog'
		}
	},
}
</script>

<style lang="stylus">
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>
