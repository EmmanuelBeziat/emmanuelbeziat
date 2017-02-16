<template>
	<section class="blog">
		<div v-if="postList.length === 0">
			<module-loader></module-loader>
		</div>

		<div class="post-list" v-else>
			<article class="post-list__item" v-for="post in postList">
				<h1 class="post-list__title"><router-link :to="{ name: 'portfolio-post', params: { slug: post.basename } }">{{ post.title }}</router-link></h1>

				<div class="post-list__infos">
					<div class="post-list__date">Posté le <time>{{ post.date | moment('dddd Do MMM YYYY') }}</time></div>

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
import moduleLoader from '../components/modules/Loader.vue'

export default {
	data () {
		return {
			postList: []
		}
	},

	components: {
		moduleLoader
	},

	created: function () {
		this.getFile()
	},

	watch: {
		'$route': 'getFile'
	},

	methods: {
		getFile: function () {
			require.ensure('../posts/articles/meta.json', (require) => {
				const posts = require('../posts/articles/meta.json')
				const extractList = this.extractList(posts)

				extractList
			})
		},

		extractList: function (posts) {
			const that = this
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
	}
}
</script>
