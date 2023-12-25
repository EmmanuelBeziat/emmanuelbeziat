<template>
	<RouterLink exact :to="to" :class="`navigation --${type}`">
		<Icon name="back" aria-hidden="true" />
		<template v-if="label">{{ label }}</template>
	</RouterLink>
</template>

<script setup>
import Icon from '@/components/global/Icon.vue'

defineProps({
	to: {
		type: [String, Object],
		required: true
	},
	type: {
		type: String,
		default: 'previous'
	},
	label: {
		type: String
	}
})
</script>

<style lang="stylus" scoped>
.navigation
	color var(--nav-color, var(--color-green))
	display flex
	align-content center

	&:hover
	&:focus
		--nav-color var(--color-yellow)

	svg
		width 1.25em
		stroke currentColor
		transform var(--transform)
		transition transform var(--transition-fast) ease-in-out
		margin-right 6px

	&.--previous
		--transform translateX(-4px)

		&:hover
		&:focus
			--transform translateX(-8px)

	&.--next
		--transform translateX(4px)
		svg
			transform var(--transform) rotate(180deg)
			order 2

		&:hover
		&:focus
			--transform translateX(8px)
</style>
