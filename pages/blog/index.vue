<template>
	<section class="blog">
		<Search placeholder="Recherche…" v-model="searchTerms" />

		<div class="post-list">
			<article class="post-list__item" v-for="post in filteredList" :key="post.slug">
				<h1 class="post-list__title"><nuxt-link :to="`/blog/${post.slug}/`">{{ post.title }}</nuxt-link></h1>

				<div class="post-list__infos">
					<div class="post-list__date">Posté le <time>{{ post.date | date('Do MMMM YYYY') }}</time></div>

					<div class="post-list__tags">
						<Tag v-for="tag in post.tags" :key="tag" :value="tag" />
					</div>
				</div>

				<div class="post-list__description">{{ post.description }}</div>
			</article>
		</div>
	</section>
</template>

<script>
import slug from 'slug'
import Moment from 'moment'
import Search from '~/components/search/Search'
import Tag from '~/components/tags/Tag'

export default {
	name: 'Blog',

	asyncData ({ params, app}) {
		return app.$axios.get(process.env.api.posts)
			.then((res) => {
				let postList = []
				res.data.forEach(item => {
					if (item.publish !== false && Moment().diff(item.date, 'days') > 1) {
						postList.push(item)
					}
				})

				return {
					posts: postList,
					searchTerms: ''
				}
			})
	},

	components: {
		Search,
		Tag
	},

	computed: {
		filteredList () {
			return this.posts.filter(post => slug(post.title.toLowerCase()).includes(slug(this.searchTerms.toLowerCase())))
		}
	},

	head () {
		return {
			title: 'Blog'
		}
	},
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'
@require '~assets/styles/components/posts.styl'
</style>
