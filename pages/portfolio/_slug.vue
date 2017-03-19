<template>
	<div class="blog">
		<article class="post">
			<header class="post__header">
				<h1 class="post__title">{{ title }}</h1>

				<div class="post__infos">
					<div class="flex">
						<div class="post__tags">
							<span class="c-tag" v-for="tag in tags">{{ tag }}</span>
						</div>

						<div class="post__tags">
							<span class="c-tag" v-for="client in clients">{{ client }}</span>
						</div>
					</div>
				</div>
			</header>

			<div class="post__content" v-html="content"></div>

			<footer class="post__footer">
				<router-link :to="'/portfolio'" class="post__navigation--previous icon-arrow-left">Revenir au portfolio</router-link>
			</footer>

		</article>
	</div>
</template>

<script>
import axios from 'axios'
import markdown from '~plugins/vue-md-render'

export default {
	name: 'portfolioSingle',

	validate ({ params }) {
		return isNaN(params.slug)
	},

	async data ({ params, error }) {
		const { data } = await axios.get(`http://localhost:3001/portfolio/${params.slug}`)
		data.content = markdown.render(data.content)

		return data
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	}
}
</script>
