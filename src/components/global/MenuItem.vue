<template>
	<RouterLink class="menu-item" :class="[`accent-${target.meta.accent}`, { '--active': isActive }]" :to>
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
		required: true
	}
})

const router = useRouter()
const route = useRoute()
const target = computed(() => router.resolve(props.to))
const isActive = computed(() => target.value.path === '/' + route.path.split('/')[1])
</script>

<style scoped>
.menu-item {
	--menu-item-font-size: var(--font-size-xl);
	--menu-item-color: var(--front-body);
	--menu-item-transition-property: opacity, translate, scale;
	--menu-item-transition-duration: var(--timing-slow);
	--menu-item-transition-timing: var(--ease-back-out);

	font: 400 var(--menu-item-font-size)/1 var(--font-heading);
	text-decoration: none;
	color: var(--menu-item-color);
	position: relative;
	transition: var(--menu-item-transition-property);
	transition-duration: var(--menu-item-transition-duration);
	transition-timing-function: var(--menu-item-transition-timing);
	transition-delay: calc(var(--appearance-delay, 0s) * 1.25);

	@media (width <= 768px) {
		transition-delay: var(--appearance-delay, 0s);
	}

	@starting-style {
		opacity: 0;
		translate: 0 45%;
		scale: .75;

		@media (width <= 768px) {
			translate: 0 50%;
			scale: .5;
		}
	}

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
		transition-duration: var(--timing-normal);
		transition-timing-function: var(--ease-back-out);
		color: var(--menu-item-color);
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

	&:is(:hover, :focus),
	&.--active {
		color: var(--accent);

		&::before,
		&::after {
			opacity: 1;
			translate: 0 0;
		}
	}

	&.--active:hover {
		&::before,
		&::after {
			color: var(--accent);
		}
	}
}

.menu-item :deep(svg) {
	display: none;
	translate: 0 0;
	padding: 0;
	opacity: 1;
	width: 24px;
	aspect-ratio: 1;
	margin: 0 auto 5px;
	fill: currentcolor;

	@media (width <= 768px) {
		display: block;
	}
}
</style>
