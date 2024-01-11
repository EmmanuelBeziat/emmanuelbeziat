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
  aspect-ratio: 1/1;
  color: var(--color-text);
  background: var(--color-background-dark);
  padding: 0.55em;
  border-radius: 50%;
  transition: var(--transition-slow) ease-out;
  overflow: hidden;
}

.social__item:hover,
.social__item:focus {
  background: var(--bg-social-link);
  transition: var(--transition-xfast) ease-out;
}

.social__item:hover :deep(svg),
.social__item:focus :deep(svg) {
  transform: scale(0.95);
}

.social__item.--twitter {
  --bg-social-link: var(--brand-color-twitter);
}

.social__item.--facebook {
  --bg-social-link: var(--brand-color-facebook);
}

.social__item.--instagram {
  --bg-social-link: var(--brand-color-instagram);
}

.social__item.--codepen {
  --bg-social-link: var(--brand-color-codepen);
}

.social__item.--github {
  --bg-social-link: var(--brand-color-github);
}

.social__item.--linkedin {
  --bg-social-link: var(--brand-color-linkedin);
}

.social__item.--youtube {
  --bg-social-link: var(--brand-color-youtube);
}

.social__item :deep(svg) {
  fill: currentColor;
  transition: var(--transition-fast) ease-in-out;
}
</style>
