<template>
	<span class="tag">
		<Icon v-if="icon === 'star'" name="star" />
		<Icon v-if="icon === 'fork'" name="fork" />
		{{ value }}
	</span>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'

defineProps({
	value: {
		type: [Number, String],
		required: true
	},
	icon: String
})
</script>

<style lang="stylus" scoped>
.tag
	background var(--color-background-light)
	padding 0 .5em
	color var(--color-text)

	svg
		fill currentColor
		height .75em
		margin-right .25em
</style>
