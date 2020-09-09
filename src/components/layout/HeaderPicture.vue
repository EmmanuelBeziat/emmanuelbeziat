<template>
	<div class="header__picture">
		<img :src="picture" alt="Emmanuel Béziat" width="220" height="220" loading="lazy" @click="pictureOnClick()">

		<div class="easter-picture" v-if="pictureEasterIsOn">
			<img src="~@/assets/img/criquette.gif" width="220" height="220" loading="lazy">
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
			return this.$route.name === 'not-found' ? require('@/assets/img/emmanuelb-error.jpg') : require('@/assets/img/emmanuelb.jpg')
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

	@media $mq-desktop
		display none

	img
		vertical-align top
		border-radius 50%
		max-width 100%

.easter-picture
	position absolute
	top 0
	width 220px
	left 50%
	transform translateX(-50%)
</style>
