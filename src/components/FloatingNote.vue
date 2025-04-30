<template>
	<div class="floating-note" :style="{ translate: `${moveX}px ${moveY}px`, rotate: `${rotation}deg` }">
		<div class="animation-fade-bounce">
			<slot />
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useMouse } from '@vueuse/core'

const props = defineProps({
	speedX: {
		type: Number,
		default: 0.01
	},

	speedY: {
		type: Number,
		default: 0.01
	},
})

const { x, y } = useMouse({ touch: false })

const moveX = computed(() => x.value * (-props.speedX * .45))
const moveY = computed(() => y.value * (-props.speedY * .45))
const rotation = computed(() => (x.value / window.innerWidth) * .75)
</script>

<style scoped>
.floating-note {
	transition: .15s var(--ease-back-out);
}
</style>
