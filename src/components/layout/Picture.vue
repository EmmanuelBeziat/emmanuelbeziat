<template>
	<div class="picture">
		<img :src="picture" alt="Emmanuel Béziat" width="220" height="220" loading="lazy" @click="pictureOnClick()">
		<img v-if="pictureEasterIsOn" src="../../assets/images/criquette.webp" width="220" height="220" loading="lazy">
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const picture = computed(() => new URL(`../../assets/images/${route.name === 'NotFound' ? 'emmanuelb-error' : 'emmanuelb'}.webp`, import.meta.url).href)

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

<style scoped>
.picture {
  margin: 2rem auto;
  display: grid;
  grid-template: "Picture"/auto;
  justify-content: center;
}

@supports (content-visibility: auto) {
  .picture {
    content-visibility: auto;
  }
}

.picture img {
  vertical-align: top;
  border-radius: 50%;
  max-width: 100%;
  grid-area: Picture;
  aspect-ratio: 1;
}


@media (width <= 1120px) {
	.picture {
		display: none;
	}
}
</style>
