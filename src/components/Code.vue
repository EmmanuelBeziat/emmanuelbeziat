<template>
	<div class="cv-code animationFadeBounce">
		<div class="cv-code__header">
			<div class="cv-code__buttons">
				<span class="fake-button --close" />
				<span class="fake-button --minify" />
				<span class="fake-button --expand" />
			</div>
			<span class="cv-code__title" v-if="code">emmanuel@code: ~/{{ code.slug }}</span>
		</div>

		<div class="cv-code__body">
			<transition mode="out-in" name="fade">
				<div v-if="code" v-html="code.markup" />

				<Loader mini v-else />
			</transition>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useCodesStore } from '@/stores/codes'
import Loader from '@/components/loader/Loader.vue'

const codes = useCodesStore()
const code = computed(() => codes.list[Math.floor(Math.random() * codes.count)] || [])
</script>

<style scoped>
.cv-code {
  border-radius: 0.5rem;
  overflow: hidden;
  background: var(--color-background-dark);
  animation-delay: 0.65s;
}

@supports (content-visibility: auto) {
  .cv-code {
    content-visibility: auto;
  }
}

:deep(pre) {
	margin: 0;
}

@media (width <= 768px) {
  :deep(pre) {
    padding: 1.5em 1em;
  }
}

:deep(pre)::after {
  content: none;
}

:deep(code) {
  animation-delay: 0.5s;
}

.cv-code__header {
	display: flex;
  align-items: center;
  background: var(--color-background-light);
  color: var(--color-text);
  text-align: center;
  padding: 5px 10px;
  border-radius: 0.5rem 0.5rem 0 0;
  position: relative;
  font-family: var(--font-stack-code);
}

@media (width <= 768px) {
	.cv-code__header {
		border-radius: 0;
	}
}

.cv-code__buttons {
  margin-right: 1rem;
  display: flex;
  gap: 6px;
}

.cv-code__buttons .fake-button {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: var(--bg-button);
}

.cv-code__buttons .--close {
  --bg-button: var(--color-red);
}

.cv-code__buttons .--minify {
  --bg-button: var(--color-yellow);
}

.cv-code__buttons .--expand {
  --bg-button: var(--color-green);
}

.cv-code__title {
  margin: auto;
  transform: translateX(-32px);
  color: var(--color-subwhite);
}

@media (width <= 1120px) {
	.cv-code__title {
		margin: 0;
		transform: none;
	}
}
</style>
