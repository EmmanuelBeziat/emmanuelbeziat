<template>
	<section class="portfolio">
		<div class="portfolio__list">
			<router-link v-for="post in posts" class="portfolio__item" :to="'/portfolio/'+post.slug" >
				<div class="portfolio__layer" :class="post.color">
					<svg class="portfolio__image icon" v-svg="post.image"></svg>
				</div>

				<div class="portfolio__caption">
					<h2 class="portfolio__title">{{ post.title }}</h2>

					<div class="portfolio__see-more">Jeter un oeil</div>
				</div>
			</router-link>
		</div>

		<div class="c-note c-note--success">
			<div class="portfolio__thanks">
				Et bien d’autres au fil des ans <small>(merci, hé ! <i class="icon-heart"></i>)</small>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios'

export default {
	name: 'portfolioList',

	data () {
		return axios.get('https://rest.emmanuelbeziat.com/portfolio')
		.then((res) => {
			return { posts: res.data }
		})
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: 'Portfolio'
		}
	}
}
</script>
