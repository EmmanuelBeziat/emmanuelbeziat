<template>
	<div class="search" role="search">
		<input class="search__field" ref="search" type="search" :placeholder="placeholder" @input="search($event.target.value)" :aria-label="label">
	</div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'

export default {
	name: 'Search',

	emits: ['update:modelValue'],

	props: {
		label: {
			type: String,
			required: true
		},
		placeholder: String
	},

	data () {
		return {
			inputValue: this.value
		}
	},

	mounted () {
		if (!isMobile) {
			this.giveFocus()
		}
	},

	methods: {
		search (value) {
			setTimeout(() => this.$emit('update:modelValue', value), 150)
		},

		giveFocus () {
			this.$refs.search.focus()
		}
	}
}
</script>

<style lang="stylus" scoped>
.search
	margin-bottom 2rem
	display flex

.search__field
	--border-color var(--color-separator)
	flex 1
	padding 10px 1rem
	background var(--color-background-dark)
	border 1px solid var(--border-color)
	box-shadow none
	outline none
	color var(--color-text)
	transition .25s ease-in-out

	&:focus
		--border-color var(--color-blue)

	&::placeholder
		color var(--color-blue)
</style>
