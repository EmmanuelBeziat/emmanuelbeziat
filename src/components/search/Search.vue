<template>
	<div class="c-search">
		<input class="c-search__input" type="search" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
	</div>
</template>

<script>
export default {
	props: ['placeholder'],

	data () {
		return {
			inputValue: this.value
		}
	},
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
