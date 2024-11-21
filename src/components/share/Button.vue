<template>
	<button @click="$emit('on-click', icon)" :class="`share__button --${icon}`">
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
.share__button {
  width: 36px;
  aspect-ratio: 1;
  background: var(--color-background-darker);
  color: var(--color-text);
  border-radius: 2px;
  transition: var(--transition-slow) ease-out;
  overflow: hidden;
  padding: 0;
  border: 0;
  outline: 0;
  cursor: pointer;

	&:is(:hover, :focus) {
		background: var(--bg-social-link);
		transition: var(--transition-xfast) ease-out;
	}

	&.--share {
		--bg-social-link: var(--color-blue);
	}
}

.share__button :deep(svg) {
  padding: .5em;
  fill: currentColor;
  width: 100%;
}
</style>
