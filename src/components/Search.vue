<template>
	<div class="search">
		<input id="searchField" ref="searchField" v-focus class="search-field" type="search" :placeholder :aria-label="label" @input="inputSearch($event.target.value)">
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDebounceFn, usePointer, useMediaQuery } from '@vueuse/core'

defineProps({
	label: {
		type: String,
		required: true
	},

	placeholder: String
})

const emit = defineEmits(['update:modelValue'])
const searchField = ref('searchField')
const { pointerType } = usePointer()
const isTouchDevice = computed(() => pointerType.value === 'touch')
const isMobileViewport = useMediaQuery('(max-width: 768px)')
const shouldAutoFocus = computed(() => !isTouchDevice.value && !isMobileViewport.value)

const inputSearch = useDebounceFn((value) => emit('update:modelValue', value), 150)

const vFocus = {
	mounted: el => {
		if (shouldAutoFocus.value) el.focus()
	}
}
</script>

<style scoped>
.search {
	margin-bottom: 2rem;
	display: flex;

	@media (width <= 768px) {
		margin-inline: -1rem;
	}
}

.search-field {
	--border-color: var(--color-separator);

	flex: 1;
	padding: 10px 1rem;
	background: var(--color-surface-dark);
	border: 1px solid var(--border-color);
	box-shadow: none;
	outline: none;
	color: var(--color-text);
	transition: border-color var(--transition-fast) ease-in-out;

	&:focus {
		--border-color: var(--color-blue);
	}

	&::placeholder {
		color: var(--color-blue);
	}
}
</style>
