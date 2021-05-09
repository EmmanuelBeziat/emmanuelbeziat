<template>
	<router-link class="menu__item" :class="!isActive || '-active'" :to="to">
		<svg viewBox="0 0 512 512" role="img">
			<title>{{ label }}</title>
			<slot />
		</svg>

		{{ label }}
	</router-link>
</template>

<script>
export default {
	name: 'MenuItem',

	props: {
		to: {
			type: Object,
			required: true
		},
		exact: {
			type: Boolean
		},
		label: {
			type: String,
			required: true
		}
	},

	computed: {
		isActive () {
			const path = this.$router.resolve(this.$props.to).path
			const route = this.$route.path.split('/')[1]
			return path === '/' + route
		}
	},
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.menu__item
	font 400 var(--font-size-menu)/1 var(--font-stack-heading)
	text-decoration none
	color var(--color-text)
	position relative

	@media $mq-tablet
		font-weight 300
		font-size 1rem
		text-align center
		flex 1
		padding 8px

	&::before
	&::after
		display inline-block
		opacity 0
		transition .3s ease-in-out
		color var(--color-text)

	&::before
		content "<"
		transform translateX(20px)
		padding-right .125em

		@media $mq-tablet
			content none

	& :deep(svg)
		display none
		transform none
		padding 0
		opacity 1
		width 24px
		aspect-ratio 1 / 1
		margin 0 auto 5px
		fill currentColor

		@media $mq-tablet
			display block

	&::after
		content "/>"
		transform translateX(-20px)
		padding-left .1875em

		@media $mq-tablet
			content none

	&[href="/"]
		&:hover
		&:focus
			color var(--color-green)

	&[href="/portfolio"]
		&:hover
		&:focus
			color var(--color-blue)

	&[href="/projets"]
		&:hover
		&:focus
			color var(--color-yellow)

	&[href="/blog"]
		&:hover
		&:focus
			color var(--color-red)

	&[href="/moi"]
		&:hover
		&:focus
			color var(--color-violet)

.-active
	&:hover
		&::before
		&::after
			color inherit

	&[href="/"]
		color var(--color-green)

	&[href="/portfolio"]
		color var(--color-blue)

	&[href="/projets"]
		color var(--color-yellow)

	&[href="/blog"]
		color var(--color-red)

	&[href="/moi"]
		color var(--color-violet)

.-active
.menu__item:hover
.menu__item:focus
	&::before
	&::after
		opacity 1
		transform translateX(0)
</style>
