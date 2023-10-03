<template>
	<div class="search" role="search">
		<input class="search__field" v-focus ref="search" type="search" :placeholder="placeholder" @input="inputSearch($event.target.value)" :aria-label="label">
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
const search = ref('search')

const inputSearch = value => {
	setTimeout(() => emit('update:modelValue', value), 150)
}

const vFocus = {
	mounted: el => { if (!isMobile) el.focus() }
}
</script>

<style lang="stylus" scoped>
// @import '../assets/styles/modules/transitions.styl'
.search
	margin-bottom 2rem
	display flex
	// @extends .animationBounce

.search__field
	--border-color var(--color-separator)
	flex 1
	padding 10px 1rem
	background var(--color-background-dark)
	border 1px solid var(--border-color)
	box-shadow none
	outline none
	color var(--color-text)
	transition var(--transition-fast) ease-in-out

	&:focus
		--border-color var(--color-blue)

	&::placeholder
		color var(--color-blue)
</style>
