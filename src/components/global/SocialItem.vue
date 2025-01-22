<template>
	<a :href="url" :class="`network --${name.toLowerCase()}`" :aria-label="name">
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
@property --bg-social-link {
	syntax: "<color>";
	inherits: true;
	initial-value: var(--color-light);
}

.network {
  display: block;
  width: 3rem;
  aspect-ratio: 1;
  color: var(--color-text);
  background: var(--color-background-dark);
  padding: .55em;
  border-radius: 50%;
  transition: var(--transition-slow) var(--ease-back-out);
  overflow: hidden;

	&:is(:hover, :focus) {
		background: var(--bg-social-link);
		transition: var(--transition-xfast) ease-in-out;
	}

	&:is(:hover, :focus) :deep(svg) {
		transform: scale(.95);
	}

	&.--twitter {
		--bg-social-link: var(--brand-color-twitter);
	}

	&.--x {
		--bg-social-link: var(--brand-color-x);
	}

	&.--facebook {
		--bg-social-link: var(--brand-color-facebook);
	}

	&.--instagram {
		--bg-social-link: var(--brand-color-instagram);
	}

	&.--codepen {
		--bg-social-link: var(--brand-color-codepen);
	}

	&.--github {
		--bg-social-link: var(--brand-color-github);
	}

	&.--linkedin {
		--bg-social-link: var(--brand-color-linkedin);
	}

	&.--youtube {
		--bg-social-link: var(--brand-color-youtube);
	}

	&.--npmjs {
		--bg-social-link: var(--brand-color-npmjs);
	}

	&.--bluesky {
		--bg-social-link: var(--brand-color-bluesky);
	}
}

.network :deep(svg) {
  fill: currentColor;
  transition: var(--transition-fast) ease-in-out;
}
</style>
