<template>
	<span class="c-tag"><i v-if="icon" :class="icon" aria-hidden="true"></i> {{ value }}</span>
</template>

<script>
export default {
	name: 'Tag',

	props: {
		value: {
			type: null,
			required: true
		},
		icon: String
	}
}
</script>


<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.c-tag
	display inline-block
	background var(--color-background-light)
	padding 0 .5em
	margin 0 rem(4px) .35em 0
	color var(--color-text)

.c-tag:last-of-type
	margin-right 0
</style>
