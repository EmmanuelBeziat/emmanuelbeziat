<template>
	<div class="posts-list">
		<article class="posts-list__item" v-for="post in posts" v-if="datePast(post.date)">
			<h1 class="post-list__title"><a v-link="{ name: 'blog-post', params: { slug: post.basename } }">{{ post.title }}</a></h1>

			<div class="post-list__infos">
				<div class="post-list__date">Posté le <time>{{ post.date | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</time></div>

				<div class="post-list__tags">
					<span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
	import Post from '../../app/resources/post'
	import Moment from 'moment'

	module.exports = {

		/**
		 * @type {Object}
		 */
		Route: {
			waitForData: true
		},

		created: function () {
			this.fetchData()
		},

		methods: {
			fetchData: function () {
				return Post.getPosts('static/posts/articles/articles.json').then(response => this.$set('posts', response.data.posts.reverse()))
			},

			datePast: function (date) {
				return Moment(date).isBefore(Moment().format('YYYY-MM-DD hh:mm:ss'))
			}
		},

		/**
		 * @return {Object}
		 */
		data () {
			return {
				posts: []
			}
		}
	}
</script>
