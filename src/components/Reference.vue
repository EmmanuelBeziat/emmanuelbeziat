<template>
	<router-link class="showcase__item" :to="`/portfolio/${reference.slug}/`">
		<div :class="['showcase__layer', reference.color]" v-html="reference.image" />

		<div class="showcase__caption">
			<h2 class="showcase__title">{{ reference.title }}</h2>

			<div class="portfolio-tags">
				<Icon class="portfolio-tags__icon" width="1em" name="tags" />

				<div class="showcase-tags__list">
					<span class="showcase-tags__item" v-for="tag in reference.tags" :key="`tag-${tag}`">{{ tag }}</span>
				</div>
			</div>
		</div>
	</router-link>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'

defineProps({
	reference: {
		type: Object,
		required: true
	}
})
</script>

<style scoped>
.showcase__item {
  opacity: 0;
  position: relative;
  color: var(--color-text);
  background: var(--color-background-dark);

	@supports (content-visibility: auto) {
		content-visibility: auto;
	}
}

.showcase__layer {
  background: var(--color-separator);
  pointer-events: none;
  position: relative;
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transform-origin: 50% 20px;
  transition: var(--transition-slow) var(--ease-back-out);
  backface-visibility: hidden;
  aspect-ratio: 1;
}

.showcase__layer :deep(svg) {
  width: 128px;
  fill: currentColor;
  aspect-ratio: 1;
  backface-visibility: hidden;
  transition: var(--transition-slow) var(--ease-back-out) .1s;
}

@media (width <= 803px) {
  .showcase__layer :deep(svg) {
    width: calc(60%);
  }
}

.showcase__caption {
  pointer-events: none;
  z-index: 5;
  position: absolute;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  transition: var(--transition-slow) var(--ease-back-out) 0s;
}

.showcase__title {
  margin: 0 0 .35em;
  line-height: 1;
  font-size: 28px;
  font-weight: 400;
}

@media (hover: hover) {
  .showcase__item:hover {
		.showcase__layer {
			transform: scale(.4) translateZ(0);
			border-radius: 50%;
			aspect-ratio: 1;
			margin: auto;
			background: var(--showcase-color);
		}

		.showcase__image {
			transform: scale(1.2);
		}

		.showcase__caption {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
			transition: var(--transition-slow) var(--ease-back-out) .1s;

			.portfolio-tags {
				transform: translateY(0);
				transition: var(--transition-slow) var(--ease-back-out) .025s;
			}
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
		--showcase-color: var(--color-background-light);
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

.showcase-tags__list {
  text-align: left;
  line-height: 1.15;
}

.showcase-tags__item {
  font-size: 14px;
  color: var(--color-text);
}

.showcase-tags__item:not(:last-child)::after {
  content: ", ";
}

.portfolio-tags {
  display: flex;
  transform: translateY(20px);
  transition: var(--transition-slow) var(--ease-back-out) 0s;
}

.portfolio-tags__icon {
  width: 1em;
  min-width: 1em;
  aspect-ratio: 1;
  fill: var(--color-yellow);
  margin-right: 10px;
}
</style>
