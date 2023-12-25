<template>
	<div class="picture">
		<img :src="picture" alt="Emmanuel Béziat" width="220" height="220" loading="lazy" @click="pictureOnClick()">
		<img v-if="pictureEasterIsOn" src="../../assets/img/criquette.webp" width="220" height="220" loading="lazy">
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const picture = computed(() => new URL(`../../assets/img/${route.name === 'NotFound' ? 'emmanuelb-error' : 'emmanuelb'}.webp`, import.meta.url).href)

const pictureCount = ref(0)
const pictureEasterIsOn = ref(false)

const pictureOnClick = () => {
	pictureCount.value += 1

	if (pictureCount.value === 5) {
		pictureEasterIsOn.value = true
		setTimeout(() => {
			pictureEasterIsOn.value = false
			pictureCount.value = 0
		}, 1920)
	}
}

</script>

<style lang="stylus" scoped>
.picture
	margin 2rem auto
	display grid
	grid-template "Picture" / auto
	justify-content center

	@supports (content-visibility auto)
		content-visibility auto

	@media $mq-desktop
		display none

	img
		vertical-align top
		border-radius 50%
		max-width 100%
		grid-area Picture
		aspect-ratio 1 / 1
</style>
