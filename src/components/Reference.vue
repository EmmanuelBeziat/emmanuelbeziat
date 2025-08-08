<template>
	<router-link class="card" :to="`/portfolio/${reference.slug}/`">
		<div :class="['layer', reference.color]" v-html="reference.image" />

		<div class="caption">
			<h2 class="title">{{ reference.title }}</h2>

			<div class="tags">
				<Icon class="tags-icon" width="1em" name="tags" />

				<div class="tags-list">
					<span v-for="tag in reference.tags" :key="`tag-${tag}`" class="tag">{{ tag }}</span>
				</div>
			</div>
		</div>
	</router-link>
</template>

<script setup>
import Icon from '@/components/Icon.vue'

defineProps({
	reference: {
		type: Object,
		required: true
	}
})
</script>

<style scoped>
.card {
	opacity: 0;
	position: relative;
	color: var(--color-text);
	background: var(--color-surface-dark);

	@supports (content-visibility: auto) {
		content-visibility: auto;
	}
}

.layer {
	background: var(--color-separator);
	pointer-events: none;
	position: relative;
	color: var(--color-text);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	transform-origin: 50% 20px;
	transition-property: scale, translate, background-color;
	transition-duration: var(--transition-slow);
	transition-timing-function: var(--ease-back-out);
	backface-visibility: hidden;
	aspect-ratio: 1;
}

.layer :deep(svg) {
	width: 128px;
	fill: currentcolor;
	aspect-ratio: 1;
	backface-visibility: hidden;
}

@media (width <= 803px) {
	.layer :deep(svg) {
		width: calc(60%);
	}
}

.caption {
	pointer-events: none;
	z-index: 5;
	position: absolute;
	inset: auto 0 0;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	overflow: hidden;
	text-align: center;
	opacity: 0;
	visibility: hidden;
	translate: 0 15px;
	transition: translate var(--transition-slow) var(--ease-back-out) 0s, opacity var(--transition-slow) var(--ease-back-out) 0s;
}

.title {
	margin: 0 0 .35em;
	line-height: 1;
	font-size: 28px;
	font-weight: 400;
}

@media (hover: hover) {
	.card:hover {
		.layer {
			scale: .4;
			translate: 0 0;
			border-radius: 50%;
			aspect-ratio: 1;
			margin: auto;
			background: var(--showcase-color);
		}

		.showcase-image {
			scale: 1.2;
		}

		.caption {
			opacity: 1;
			visibility: visible;
			translate: 0 0;
			transition-delay: .1s;
		}

		.tags {
			translate: 0 0;
			transition: translate var(--transition-slow) var(--ease-back-out) .1s, opacity var(--transition-slow) var(--ease-back-out) .1s;
		}
	}

	.blue {
		--showcase-color: var(--color-blue);
	}

	.red {
		--showcase-color: var(--color-red);
	}

	.violet {
		--showcase-color: var(--color-violet);
	}

	.yellow {
		--showcase-color: var(--color-yellow);
	}

	.green {
		--showcase-color: var(--color-green);
	}

	.black {
		--showcase-color: var(--color-surface-light);
	}
}

.showcase-tags {
	display: flex;
	align-items: center;
	justify-content: center;

	i {
		margin-right: 10px;
	}
}

.tags-list {
	text-align: left;
	line-height: 1.15;
}

.tag {
	font-size: 14px;
	color: var(--color-text);
}

.tag:not(:last-child)::after {
	content: ", ";
}

.tags {
	display: flex;
	translate: 0 20px;
	transition: opacity var(--transition-slow) var(--ease-back-out) 0s, translate var(--transition-slow) var(--ease-back-out) 0s;
}

.tags-icon {
	width: 1em;
	min-width: 1em;
	aspect-ratio: 1;
	fill: var(--color-yellow);
	margin-right: 10px;
}
</style>
