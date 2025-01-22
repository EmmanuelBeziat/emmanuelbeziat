<template>
	<div class="cv-code">
		<div class="top-bar">
			<div class="fake-buttons">
				<span class="fake-button --close" />
				<span class="fake-button --minify" />
				<span class="fake-button --expand" />
			</div>
			<span class="title" v-if="code">emmanuel@code: ~/{{ code.slug }}</span>
		</div>

		<div class="code">
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
  border-radius: .5rem;
  overflow: hidden;
  background: var(--color-background-dark);
  animation-delay: .75s;
	animation-duration: calc(var(--transition-slow) * 1.5);

	@supports (content-visibility: auto) {
		content-visibility: auto;
	}
}

:deep(pre) {
	margin: 0;
}

@container (width < 46rem) {
  :deep(pre) {
    padding: 1.5em 1em;
  }
}

:deep(pre)::after {
  content: none;
}

:deep(code) {
  animation-delay: .5s;
}

.top-bar {
	display: flex;
  align-items: center;
  background: var(--color-background-light);
  color: var(--color-text);
  text-align: center;
  padding: 5px 10px;
  border-radius: .5rem .5rem 0 0;
  position: relative;
  font-family: var(--font-stack-code);
}

.fake-buttons {
  margin-right: 1rem;
  display: flex;
  gap: 6px;
}

.fake-button {
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  background: var(--bg-button);
}

.title {
  margin: auto;
  transform: translateX(-32px);
  color: var(--color-light);

	@container (width < 46rem) {
		margin: 0;
		transform: none;
	}
}

.--close {
	--bg-button: var(--color-red);
}

.--minify {
	--bg-button: var(--color-yellow);
}

.--expand {
	--bg-button: var(--color-green);
}
</style>
