<template>
	<section class="me">
		<div class="me__drawing">
			<img :src="picture" alt="Emmanuel Béziat (Drawing by Marie-Laure Rouzier)">
		</div>

		<h2>Et sinon …?</h2>
		<div class="me__interview">
			<p>J’ai pas d’idée pour me présenter.</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Me',

	data () {
		return {
			hairs: 'long'
		}
	},

	computed: {
		picture () {
			return require(`@/assets/img/emmanuelb-draw-${this.hairs}.png`)
		}
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
</style>
