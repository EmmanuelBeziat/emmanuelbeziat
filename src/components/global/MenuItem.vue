<template>
	<RouterLink class="menu-item" :class="!isActive || '--active'" :to>
		<Icon :name="icon" />
		{{ label }}
	</RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Icon from '@/components/Icon.vue'

const props = defineProps({
	to: {
		type: Object,
		required: true
	},
	exact: {
		type: Boolean
	},
	label: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		requirde: true
	}
})

const router = useRouter()
const route = useRoute()
const isActive = computed(() => router.resolve(props.to).path === '/' + route.path.split('/')[1])
</script>

<style scoped>
@property --link-color {
	syntax: "<color>";
	inherits: false;
	initial-value: var(--color-text);
}

.menu-item {
	font: 400 var(--font-size-menu)/1 var(--font-stack-heading);
	text-decoration: none;
	color: var(--link-color);
	position: relative;

	@media (width <= 768px) {
		font-weight: 300;
		font-size: 1rem;
		text-align: center;
		flex: 1;
		padding: 8px;
	}

	&::before,
	&::after {
		display: inline-block;
		opacity: 0;
		transition-property: color, opacity, translate;
		transition-duration: var(--transition-normal);
		transition-timing-function: var(--ease-back-out);
		color: var(--color-text);
		content: var(--content);

		@media (width <= 768px) {
			display: none;
		}
	}

	&::before {
		--content: "<";

		translate: 20px 0;
		padding-right: .125em;
	}

	&::after {
		--content: "/>";

		translate: -20px 0;
		padding-left: .1875em;
	}

	&:is(:hover, :focus) {
		color: var(--link-color-hover);
	}

	&:is(:hover, :focus),
	&.--active {
		&::before,
		&::after {
			opacity: 1;
			translate: 0 0;
		}
	}

	&.--active {
		color: var(--link-color-active);

		&:hover::before,
		&:hover::after {
			color: var(--link-color-hover);
		}
	}

	&[href="/"] {
		--link-color-hover: var(--color-green);
		--link-color-active: var(--color-green);
	}

	&[href="/portfolio"] {
		--link-color-hover: var(--color-blue);
		--link-color-active: var(--color-blue);
	}

	&[href="/projets"] {
		--link-color-hover: var(--color-yellow);
		--link-color-active: var(--color-yellow);
	}

	&[href="/blog"] {
		--link-color-hover: var(--color-red);
		--link-color-active: var(--color-red);
	}

	&[href="/moi"] {
		--link-color-hover: var(--color-violet);
		--link-color-active: var(--color-violet);
	}
}

.menu-item :deep(svg) {
	display: none;
	translate: 0 0;
	padding: 0;
	opacity: 1;
	width: 24px;
	aspect-ratio: 1/1;
	margin: 0 auto 5px;
	fill: currentcolor;

	@media (width <= 768px) {
		display: block;
	}
}
</style>
