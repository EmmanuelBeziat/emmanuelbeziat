<template>
	<div class="c-search" role="search">
		<input class="c-search__input" :title="placeholder" ref="search" type="search" :placeholder="placeholder" @input="search($event.target.value)" :aria-label="label">
	</div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'

export default {
	name: 'Search',

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
			setTimeout(() => this.$emit('input', value), 150)
		},

		giveFocus () {
			console.log('focus')
			this.$refs.search.focus()
		}
	}
}
</script>


<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.c-search
	margin-bottom 2rem
	display flex

.c-search__input
	flex 1
	padding 10px 1rem
	background var(--color-background-dark)
	border 1px solid var(--color-separator)
	box-shadow none
	outline none
	color var(--color-text)
	transition .25s ease-in-out

	&:focus
		border-color var(--color-blue)

	&::placeholder
		color var(--color-blue)

</style>
