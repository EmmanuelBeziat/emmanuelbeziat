<template>
	<RouterLink exact :to :class="`navigation --${type}`">
		<Icon name="back" aria-hidden="true" />
		<template v-if="label">{{ label }}</template>
	</RouterLink>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'

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
  display: flex;
  align-content: center;
}

.navigation:is(:hover, :focus) {
  --nav-color: var(--color-yellow);
}

.navigation svg {
  width: 1.25em;
  stroke: currentColor;
  transform: var(--transform);
  transition: transform var(--transition-fast) ease-in-out;
  margin-right: 6px;
}

.navigation.--previous {
  --transform: translateX(-4px);
}

.navigation.--previous:is(:hover, :focus) {
  --transform: translateX(-8px);
}

.navigation.--next {
  --transform: translateX(4px);
}

.navigation.--next svg {
  transform: var(--transform) rotate(180deg);
  order: 2;
}

.navigation.--next:is(:hover, :focus) {
  --transform: translateX(8px);
}
</style>
