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
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.c-search
	margin-bottom 2rem
	display flex

.c-search__input
	flex 1
	padding 10px 1rem
	background darken($color-background, 10%)
	border 1px solid $color-grey
	box-shadow none
	outline none
	color $color-text
	transition .25s ease-in-out

	&:focus
		border-color $color-blue

	&::placeholder
		color $color-blue

</style>
