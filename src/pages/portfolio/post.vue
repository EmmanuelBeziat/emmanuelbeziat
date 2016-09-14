<template>
	<article class="post portfolio">
		<header class="post__header">
			<h1 class="post__title">{{ post.title }}</h1>
			<div class="post__infos">
				<div class="flex">
					<div class="post__tags">
						<span class="c-tag" v-for="client in post.clients">{{ client }}</span>
					</div>
					<div class="post__tags">
						<span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
					</div>
				</div>
			</div>
		</header>
		<div class="post__content" v-linkable>{{{ post.content }}}</div>
		<footer class="post__footer">
			<a class="post__navigation post__navigation--previous icon-arrow-left" v-link="{ name: 'portfolio', activeClass: '' }">Revenir au portfolio</a>
		</footer>
	</article>
</template>

<script>
	import Post from '../../app/resources/post'
	import Vue from 'vue'

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
				const that = this
				const slug = that.$route.params.slug
				const response = Post.getPosts('../static/posts/portfolio/portfolio.json', slug).then((response) => {

					response.data.posts.forEach(function(post) {
						if (post.basename === slug) {
							that.$set('post', post)
                            that.$set('params.title', post.title)
						}

                        // Update Metadatas
                        that.getAsyncData()
					})
				})
			},

            getAsyncData: function () {
                this.$emit('updateHead')
            }
		},

        /**
         * Metadatas
         */
        head: {
            title: function () {
                return {
                    inner: this.params.title + ' :: Portfolio',
                    separator: '—'
                }
            }
        },

		/**
		 * @return {Object}
		 */
		data () {
			return {
				post: { },
                params: {
                    title: ''
                }
			}
		}
	}
</script>
