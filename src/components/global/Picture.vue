<template>
	<div class="picture">
		<picture>
			<source :srcset="pictureAvif" type="image/avif">
			<source :srcset="pictureWebp" type="image/webp">
			<img :src="pictureWebp" alt="Emmanuel Béziat" width="220" height="220" loading="lazy" @click="handlePictureClick()">
		</picture>
		<img v-if="isEasterEggActive" src="../../assets/images/criquette.avifs" width="220" height="220" loading="lazy">
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const baseImageName = computed(() => route.name === 'NotFound' ? 'emmanuelb-error' : 'emmanuelb')
const pictureAvif = computed(() => new URL(`../../assets/images/${baseImageName.value}.avif`, import.meta.url).href)
const pictureWebp = computed(() => new URL(`../../assets/images/${baseImageName.value}.webp`, import.meta.url).href)

const clickCount = ref(0)
const isEasterEggActive = ref(false)

const handlePictureClick = () => {
	clickCount.value += 1

	if (clickCount.value === 5) {
		isEasterEggActive.value = true
		setTimeout(() => {
			isEasterEggActive.value = false
			clickCount.value = 0
		}, 1920)
	}
}

</script>

<style scoped>
.picture {
	margin: 2rem auto;
	display: grid;
	grid-template: "Picture" / auto;
	justify-content: center;

	@supports (content-visibility: auto) {
		content-visibility: auto;
	}

	@media (width <= 1120px) {
		display: none;
	}

	img {
		grid-area: Picture;
		vertical-align: top;
		border-radius: 50%;
		max-width: 100%;
		aspect-ratio: 1;
	}

	picture {
		grid-area: Picture;
	}
}
</style>
