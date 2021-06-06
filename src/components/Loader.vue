<template>
	<div class="loader">
		<template v-if="!mini">
			<h2>Chargement en cours</h2>
			<p>Alors assieds-toi et tais-toi !</p>
		</template>

		<svg width="42" viewBox="0 0 52 100">
			<circle fill="var(--color-text)" stroke="none" cx="6" cy="50" r="6">
				<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>
			</circle>
			<circle fill="var(--color-text)" stroke="none" cx="26" cy="50" r="6">
				<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>
			</circle>
			<circle fill="var(--color-text)" stroke="none" cx="46" cy="50" r="6">
				<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>
			</circle>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'Loader',

	props: {
		mini: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="stylus" scoped>
.loader
	display flex
	flex-direction column
	justify-content center
	align-items center
	text-align center

	h2
		margin 0

		&::before
		&::after
			display inline-block
			color var(--color-red)
			font-size 2em
			font-weight 400
			margin 0 1rem
			transform translateY(.3em)

		&::before
			content "{"
		&::after
			content "}"

	p
		margin 0
</style>
