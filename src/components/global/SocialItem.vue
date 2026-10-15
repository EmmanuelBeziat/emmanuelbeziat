<template>
	<a :href="url" :class="`network accent-brand-${name.toLowerCase()}`" :aria-label="name">
		<Icon :name="icon" />
	</a>
</template>

<script setup>
import Icon from '@/components/Icon.vue'

defineProps({
	name: {
		type: String,
		required: true
	},

	url: {
		type: String,
		required: true
	},

	icon: {
		type: String,
		required: true
	}
})
</script>

<style scoped>
.network {
	display: block;
	width: calc(var(--spacer) * 1.5);
	aspect-ratio: 1;
	color: var(--front-body);
	background: var(--back-1);
	padding: .55em;
	border-radius: 50%;
	transition: background-color var(--timing-slow) var(--ease-back-out);
	overflow: hidden;

	&:is(:hover, :focus) {
		background: var(--accent);
		transition: background-color var(--timing-xfast) ease-in-out;
	}

	&:is(:hover, :focus) :deep(svg) {
		scale: .75;
	}
}

.network :deep(svg) {
	fill: currentcolor;
	transition: scale var(--timing-normal) var(--ease-back-out);
}
</style>
