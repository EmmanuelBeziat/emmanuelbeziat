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
		translate: var(--translate);
		rotate: var(--rotate);
		transition: translate var(--transition-fast) ease-in-out, rotate var(--transition-fast) ease-in-out;
	}

	&.--previous {
		--translate: -4px 0;
		--rotate: 0;
	}

	&.--previous:is(:hover, :focus) {
		--translate: -8px 0;
	}

	&.--next {
		--translate: 4px 0;
		--rotate: 0;
	}

	&.--next svg {
		translate: var(--translate);
		rotate: var(--rotate);
		order: 2;
	}

	&.--next:is(:hover, :focus) {
		--translate: 8px 0;
	}
}
</style>
