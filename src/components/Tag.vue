<template>
	<span class="tag">
		<Icon v-if="icon === 'star'" name="star" />
		<Icon v-if="icon === 'fork'" name="fork" />
		{{ value }}
	</span>
</template>

<script setup>
import Icon from '@/components/Icon.vue'

defineProps({
	value: {
		type: [Number, String],
		required: true
	},
	icon: String
})
</script>

<style scoped>
.tag {
	background: var(--color-background-light);
	padding: 0 .5em;
	color: var(--color-text);
	display: flex;
	align-items: center;
	gap: 4px;

	svg {
		fill: currentColor;
		height: .75em;
		margin-right: .25em;
	}
}
</style>
