<template>
	<div class="loader">
		<div class="loader__item">{ <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span> }</div>
		<div class="loader__title">Chargement en cours <small>alors assieds-toi et tais-toi !</small></div>
	</div>
</template>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

@keyframes pulsate
	0%
		// transform scale(.1)
		opacity 0

	25%
	75%
		opacity 1

	100%
		// transform scale(1.2)
		opacity 0

.loader
	display flex
	flex-direction column
	align-items center
	padding 2rem 0

.loader__item
	text-align center
	font var(--font-size-heading-1)/1.5 var(--font-stack-heading)
	color var(--color-yellow)

.loader__dot
	color var(--color-green)
	display inline-block
	transform translateY(-10px)
	opacity 0
	animation pulsate 1s ease-out
	animation-iteration-count infinite

.loader__dot:nth-of-type(2)
	animation-delay .1s

.loader__dot:nth-of-type(3)
	animation-delay .2s

.loader__title
	text-align center
	color var(--color-white)
	margin-top rem(10px)
	text-transform lowercase
	font-size var(--font-size-heading-3)
	line-height 1.25

	small
		color var(--color-red)
		display block
		font-size rem(16px)
</style>
