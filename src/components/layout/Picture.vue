<template>
	<div class="header__picture">
		<img :src="picture" alt="Emmanuel Béziat" width="220" height="220" loading="lazy" @click="pictureOnClick()">

		<div class="easter-picture" v-if="pictureEasterIsOn">
			<img src="~@/assets/img/criquette.webp" width="220" height="220" loading="lazy">
		</div>
	</div>
</template>

<script>
import { easterPicture } from '@/plugins/mixins/easters'

export default {
	name: 'Picture',

	mixins: [easterPicture],

	computed: {
		picture () {
			return this.$route.name === 'NotFound' ? require('@/assets/img/emmanuelb-error.webp') : require('@/assets/img/emmanuelb.webp')
		}
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.header__picture
	margin 2rem auto
	position relative

	@supports (content-visibility auto)
		content-visibility auto

	@media $mq-desktop
		display none

	img
		vertical-align top
		border-radius 50%
		max-width 100%
		@supports (aspect-ratio 1 / 1)
			aspect-ratio 1 / 1

.easter-picture
	position absolute
	top 0
	width 220px
	left 50%
	transform translateX(-50%)
	@supports (aspect-ratio 1 / 1)
		aspect-ratio 1 / 1
</style>
