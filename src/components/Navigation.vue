<template>
	<router-link exact :to="to" :class="`navigation --${type}`">
		<svg viewBox="0 0 128 128" aria-hidden="true">
			<line style="stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="57.12" x2="17.787" y1="103.334" y2="64"/>
			<line style="stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="17.787" x2="57.12" y1="64" y2="24.666"/>
			<line style="stroke-width:12;stroke-miterlimit:10;" x1="17.787" x2="118.213" y1="64" y2="64"/>
		</svg>
		<template v-if="label">{{ label }}</template>
	</router-link>
</template>

<script>
export default {
	name: 'Navigation',

	props: {
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
	}
}
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
		transition transform .25s ease-in-out
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
