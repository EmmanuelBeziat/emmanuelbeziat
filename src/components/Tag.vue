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
	background: var(--color-back-light);
	padding: 0 .5em;
	color: var(--color-front);
	display: flex;
	align-items: center;
	gap: 4px;

	svg {
		fill: currentcolor;
		height: .75em;
		margin-right: .25em;
	}
}
</style>
