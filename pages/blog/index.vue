<template>
	<section class="blog">
		<div class="c-search">
			<input class="c-search__input" type="search" placeholder="Recherche…" v-model="search">
		</div>

		<div class="post-list">
			<article class="post-list__item" v-for="post in filteredList" :key="post.slug">
				<h1 class="post-list__title"><nuxt-link :to="'/blog/'+post.slug">{{ post.title }}</nuxt-link></h1>

				<div class="post-list__infos">
					<div class="post-list__date">Posté le <time>{{ post.date | moment('Do MMMM YYYY') }}</time></div>

					<div class="post-list__tags">
						<span class="c-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
					</div>
				</div>

				<div class="post-list__description">{{ post.description }}</div>
			</article>
		</div>
	</section>
</template>

<script>
import slug from 'slug'
import moment from 'moment'

export default {
	name: 'Blog',

	asyncData ({ params, app}) {
		return app.$axios.get(process.env.api.posts)
			.then((res) => {
				let postList = []
				res.data.forEach(item => {
					if (item.publish !== false && moment().diff(item.date, 'days') > 1) {
						postList.push(item)
					}
				})

				return {
					posts: postList,
					search: ''
				}
			})
	},

	computed: {
		filteredList () {
			return this.posts.filter(post => slug(post.title.toLowerCase()).includes(slug(this.search.toLowerCase())))
		}
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: 'Blog'
		}
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'
@require '~assets/styles/components/posts.styl'
@require '~assets/styles/modules/tags.styl'
@require '~assets/styles/modules/search.styl'
</style>
