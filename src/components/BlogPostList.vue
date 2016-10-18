<template>
	<section class="blog">
		<div v-if="$loadingRouteData" class="loader">
			<div class="loader__item"></div>
			<div class="loader__title">Chargement</div>
		</div>

		<div class="post-list" v-if="!$loadingRouteData">
			<article class="post-list__item" v-for="post in postList">
				<h1 class="post-list__title"><a v-link="{ name: 'blog-post', params: { slug: post.basename } }">{{ post.title }}</a></h1>

				<div class="post-list__infos">
					<div class="post-list__date">Posté le <time>{{ post.date | moment 'dddd Do MMM YYYY' }}</time></div>

					<div class="post-list__tags">
						<span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
					</div>
				</div>
			</article>
		</div>
	</section>
</template>

<script>
import Moment from 'moment'

export default {
	data () {
		return {
			postList: []
		}
	},

	methods: {
		extractList: function (posts) {
			var that = this
			posts.forEach(function (post) {
				if (!that.datePast(post.date)) return
				if (!that.isPublished(post.publish)) return

				that.postList.push(post)
			})
		},

		datePast: function (date) {
			return Moment(date).isBefore(Moment().format('YYYY-MM-DD hh:mm:ss'))
		},

		isPublished: function (publish) {
			return publish || false
		}
	},

	head: {
		title: {
			inner: 'Blog',
			separator: '—'
		}
	},

	route: {
		data (transition) {
			require.ensure('../posts/articles/meta.json', (require) => {
				const posts = require('../posts/articles/meta.json')
				const extractList = this.extractList(posts)

				transition.next({
					extractList
				})
			})
		}
	}
}
</script>
