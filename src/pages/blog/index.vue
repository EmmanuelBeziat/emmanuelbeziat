<template>
	<section>
		<h1>Liste d'articles (blog)</h1>

		<div v-for="post in posts">
			<article class="article">
				<h1 class="article__title"><a v-link="{ name: 'blog-post', params: { slug: post.slug } }">{{ post.title }}</a></h1>
				<div class="article__date">{{ post.published_at | moment 'dddd Do MMM YYYY[, à] HH[h]mm' }}</div>
			</article>
		</div>
	</section>
</template>

<script>
	import Blog from '../../resources/blog'
	import MarkedMetaData from 'marked-metadata'
	var fs = require('fs')

	var urltest = '../../content/articles/exemple-d-article/index.md'

	var source = fs.readFileSync(urltest).toString();
	console.log(source)

	var md = new MarkedMetaData(urltest);
	md.defineTokens('---', '---')

	module.exports = {

		/**
		 * @type {Object}
		 */
		Route: {
			waitForData: true,

			/**
			 * Fetch route data
			 * @param  {Object} transition
			 * @return {Promis}
			 */
			data (transition) {
				return Blog.get().then(response => this.$set('posts', response.data))
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
