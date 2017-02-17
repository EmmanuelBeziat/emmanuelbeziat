<template>
	<section class="portfolio">
		<div v-if="postList.length === 0">
			<module-loader></module-loader>
		</div>

		<div class="portfolio__list" v-else>
			<router-link v-for="post in postList" class="portfolio__item" :to="{ name: 'portfolio-post', params: { slug: post.basename } }" >
				<div class="portfolio__layer" :class="post.color">
					<svg class="portfolio__image icon" v-svg="post.image"></svg>
				</div>

				<div class="portfolio__caption">
					<h2 class="portfolio__title">{{ post.title }}</h2>

					<div class="portfolio__see-more">Jeter un oeil</div>
				</div>
			</router-link>
		</div>

		<div class="c-note c-note--success" v-if="postList.length === 0">
			<div class="portfolio__thanks">
				Et bien d’autres au fil des ans <small>(merci, hé ! <i class="icon-heart"></i>)</small>
			</div>
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
			require.ensure('../posts/portfolio/meta.json', (require) => {
				const posts = require('../posts/portfolio/meta.json')
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
