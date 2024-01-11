<template>
	<span class="tag">
		<Icon v-if="icon === 'star'" name="star" />
		<Icon v-if="icon === 'fork'" name="fork" />
		{{ value }}
	</span>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'

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
  padding: 0 0.5em;
  color: var(--color-text);
}

.tag svg {
  fill: currentColor;
  height: 0.75em;
  margin-right: 0.25em;
}
</style>
