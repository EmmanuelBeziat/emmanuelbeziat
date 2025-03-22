<template>
	<div class="floating-note" :style="{ transform: transformValue }">
		<div class="animation-fade-bounce">
			<slot />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

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

const moveX = ref(0)
const moveY = ref(0)
const rotation = ref(0)

/**
 * Computes the CSS transform value for the floating note
 * Includes translation and rotation based on mouse movement
 */
const transformValue = computed(() => `translate(${moveX.value}px, ${moveY.value}px) rotate(${rotation.value}deg)`)

/**
 * Handles mouse movement to update the position and rotation of the floating note
 * @param {MouseEvent} event - The mousemove event
 */
const handleMouseMove = event => {
	moveX.value = event.clientX * (-props.speedX * .45)
	moveY.value = event.clientY * (-props.speedY * .45)
	rotation.value = (event.clientX / window.innerWidth) * .75
}
onMounted(() => {
	document.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
	document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.floating-note {
	transition: .15s var(--ease-back-out);
}
</style>
