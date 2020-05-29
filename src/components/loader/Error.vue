<template>
	<div class="error">
		<div class="error__item">😥</div>
		<div class="error__title">Impossible de charger le contenu</div>
	</div>
</template>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.error
	display flex
	flex-direction column
	align-items center
	padding 2rem 0

.error__item
	text-align center
	font var(--font-size-heading-1)/1.5 var(--font-stack-heading)
	color var(--color-yellow)

.error__title
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
