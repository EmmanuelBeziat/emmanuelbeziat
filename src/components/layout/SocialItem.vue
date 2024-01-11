<template>
	<a :href="url" :class="`social__item --${name.toLowerCase()}`" :aria-label="name">
		<Icon :name="icon" />
	</a>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'

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
.social__item {
  display: block;
  width: 3rem;
  aspect-ratio: 1;
  color: var(--color-text);
  background: var(--color-background-dark);
  padding: .55em;
  border-radius: 50%;
  transition: var(--transition-slow) ease-out;
  overflow: hidden;
}

.social__item:is(:hover, :focus) {
  background: var(--bg-social-link);
  transition: var(--transition-xfast) ease-out;
}

.social__item:is(:hover, :focus) :deep(svg) {
  transform: scale(.95);
}

.--twitter {
  --bg-social-link: var(--brand-color-twitter);
}

.--x {
  --bg-social-link: var(--brand-color-x);
}

.--facebook {
  --bg-social-link: var(--brand-color-facebook);
}

.--instagram {
  --bg-social-link: var(--brand-color-instagram);
}

.--codepen {
  --bg-social-link: var(--brand-color-codepen);
}

.--github {
  --bg-social-link: var(--brand-color-github);
}

.--linkedin {
  --bg-social-link: var(--brand-color-linkedin);
}

.--youtube {
  --bg-social-link: var(--brand-color-youtube);
}

.social__item :deep(svg) {
  fill: currentColor;
  transition: var(--transition-fast) ease-in-out;
}
</style>
