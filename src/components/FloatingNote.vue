<template>
	<div class="floating-note" :style="{ translate: `${moveX}px ${moveY}px`, rotate: `${rotation}deg` }">
		<div class="animation-fade-bounce">
			<slot />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
