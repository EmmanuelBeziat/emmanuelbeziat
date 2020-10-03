<template>
	<div class="filters">
		<button class="c-filter" @click="$emit('on-filter', '')"><i v-if="icon" :class="icon" aria-hidden="true"></i> tous</button>
		<button class="c-filter" v-for="filter in filters" :key="`filter-${filter}`" @click="$emit('on-filter', filter)"><i v-if="icon" :class="icon" aria-hidden="true"></i> {{ filter }}</button>
	</div>
</template>

<script>
export default {
	name: 'Filters',

	props: {
		filters: {
			type: Array,
			required: true,
			validator: value => value.length
		},
		icon: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.c-filter
	display inline-block
	background var(--color-background-light)
	padding .35em
	margin 0 rem(4px) rem(4px) 0
	color var(--color-text)
	border 0
	cursor pointer

	i
		margin-right 6px

.c-filter:hover
	background var(--color-background-dark)
	color inherit

.c-filter.is-active
	i
		color var(--color-yellow)

.c-filter:last-of-type
	margin-right 0
</style>
