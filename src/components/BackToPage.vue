<template>
	<RouterLink exact :to :class="`navigation --${type}`">
		<Icon name="back" aria-hidden="true" />
		<template v-if="label">{{ label }}</template>
	</RouterLink>
</template>

<script setup>
import Icon from '@/components/Icon.vue'

defineProps({
	to: {
		type: [String, Object],
		required: true
	},
	type: {
		type: String,
		default: 'previous'
	},
	label: {
		type: String
	}
})
</script>

<style scoped>
.navigation {
	color: var(--nav-color, var(--color-green));
	display: inline-flex;
	gap: 6px;

	&:is(:hover, :focus) {
		--nav-color: var(--color-yellow);
	}

	svg {
		width: 1.25em;
		stroke: currentColor;
		transform: var(--transform);
		transition: transform var(--transition-fast) ease-in-out;
	}

	&.--previous {
		--transform: translateX(-4px);
	}

	&.--previous:is(:hover, :focus) {
		--transform: translateX(-8px);
	}

	&.--next {
		--transform: translateX(4px);
	}

	&.--next svg {
		transform: var(--transform) rotate(.5turn);
		order: 2;
	}

	&.--next:is(:hover, :focus) {
		--transform: translateX(8px);
	}
}
</style>
