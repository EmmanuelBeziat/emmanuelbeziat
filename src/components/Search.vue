<template>
	<div class="search">
		<input id="searchField" class="search-field" ref="searchField" type="search" :placeholder v-focus @input="inputSearch($event.target.value)" :aria-label="label">
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { isMobile } from 'mobile-device-detect'

defineProps({
	label: {
		type: String,
		required: true
	},

	placeholder: String
})

const emit = defineEmits(['update:modelValue'])
const searchField = ref('searchField')

const inputSearch = value => {
	setTimeout(() => emit('update:modelValue', value), 150)
}

const vFocus = {
	mounted: el => { if (!isMobile) el.focus() }
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
	transition: var(--transition-fast) ease-in-out;

	&:focus {
		--border-color: var(--color-blue);
	}

	&::placeholder {
		color: var(--color-blue);
	}
}
</style>
