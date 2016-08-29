<template>
	<section class="portfolio">
		<div class="portfolio__list">
			<div class="portfolio__item" v-for="post in portfolio">
				<div class="portfolio__layer portfolio__layer--{{ post.color }}">
					<svg class="portfolio__image icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/static/sprites/icons.svg#{{ post.image }}"></use>
					</svg>
				</div>
				<div class="portfolio__caption">
					<h2 class="portfolio__title">{{ post.title }}</h2>
					<div class="portfolio__infos">
						<a v-link="{ name: 'portfolio-post', params: { slug: post.basename} }" class="portfolio__see-more">Jeter un oeil</a>
					</div>
				</div>
			</div>
		</div>

		<div class="c-note c-note--success">
			<div class="portfolio__thanks">
				Et bien d’autres au fil des ans <small>(merci, hé ! <i class="icon-heart"></i>)</small>
			</div>
		</div>
	</section>
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
				return Post.getPosts('static/posts/portfolio/portfolio.json').then(response => this.$set('portfolio', response.data.posts.reverse()))
			}
		},

		/**
		 * @return {Object}
		 */
		data () {
			return {
				portfolio: []
			}
		}
	}
</script>
