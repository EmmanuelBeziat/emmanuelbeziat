<template>
	<section class="me">
		<div class="me__drawing">
			<img :src="picture" alt="Emmanuel Béziat (Drawing by Marie-Laure Rouzier)" loading="lazy">
		</div>

		<div class="me__interview">
			<h2>Et sinon …?</h2>

			<p>J’ai pas d’idée pour me présenter.</p>

			<h3>Où est-ce que tu bosses ?</h3>
			<p>
				<img src="https://images.emmanuelbeziat.com/Home-2020---01-min.jpg" alt="Home" loading="lazy">
			</p>
			<p>C’est mon bureau. Y en a plein comme ça, mais celui-là c’est le mien. 😍</p>

			<h3>Et tu fais quoi ?</h3>
			<keep-alive>
				<GithubCards align="left" />
			</keep-alive>
			<p>En gros, surtout du Javascript. Parfois avec Vue.js, parfois sans.</p>

			<h2>À quoi tu joues ? 🎮</h2>
			<p>
				<img src="https://i1.trueachievements.com/infog-story/760992.png" alt="Xbox" loading="lazy">
			</p>
		</div>
	</section>
</template>

<script>
import GithubCards from '@/components/GithubCards'

export default {
	name: 'Me',

	data () {
		return {
			hairs: 'mid'
		}
	},

	computed: {
		picture () {
			return require(`@/assets/img/emmanuelb-draw-${this.hairs}.png`)
		}
	},

	components: {
		GithubCards
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.me__drawing
	text-align center
	padding 0 2rem
	max-width 38rem
	margin auto

	img
		vertical-align top
		max-width 100%

h2
	font 400 var(--font-size-article-title)/1.25 var(--font-stack-heading)
</style>
