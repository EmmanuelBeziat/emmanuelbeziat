<template>
	<h1>tags</h1>
	<div class="posts-list">
		<article class="posts-list__item" v-for="post in posts">
			<h1 class="post-list__title"><a v-link="{ name: 'blog-post', params: { slug: post.basename } }">{{ post.title }}</a></h1>

			<div class="post-list__infos">
				<div class="post-list__date">Posté le <time>{{ post.date | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</time></div>

				<div class="post-list__tags">
					<a v-link="{ name: 'blog-tag', params: { tag: tag } }" class="c-tag" v-for="tag in post.tags">{{ tag }}</a>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
	import Post from '../../app/resources/post'

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
				let posts = []
				const that = this
				const slug = that.$route.params.slug
				const response = Post.getPosts('../static/posts/articles/articles.json').then((response) => {

					response.data.posts.forEach(function (post) {
						post.tags.forEach(function (tag) {
							if (tag === slug) {
								posts.push(post)
							}
						})
					})
				})

				that.$set('posts', posts)
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
