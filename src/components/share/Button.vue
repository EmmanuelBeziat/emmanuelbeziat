<template>
	<button :class="`share-button --${icon}`" @click="$emit('on-click', icon)">
		<Icon name="share" />
	</button>
</template>

<script setup>
import Icon from '@/components/Icon.vue'

defineProps({
	icon: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	}
})
</script>

<style scoped>
.share-button {
	width: 36px;
	aspect-ratio: 1;
	background: var(--color-surface-darker);
	color: var(--color-text);
	border-radius: 2px;
	transition: background-color var(--transition-slow) ease-out;
	overflow: hidden;
	padding: 0;
	border: 0;
	outline: 0;
	cursor: pointer;

	&:is(:hover, :focus) {
		background: var(--bg-social-link);
		transition: background-color var(--transition-xfast) ease-out;
	}

	&.--share {
		--bg-social-link: var(--color-blue);
	}
}

.share-button :deep(svg) {
	padding: .5em;
	fill: currentcolor;
	width: 100%;
}
</style>
