<template>
	<div class="cv-code">
		<div class="cv-code__header">
			<div class="cv-code__buttons">
				<span class="fake-button --close" />
				<span class="fake-button --minify" />
				<span class="fake-button --expand" />
			</div>
			<span class="cv-code__title" v-if="code">emmanuel@code: ~/{{ code.slug }} </span>
		</div>

		<div class="cv-code__body">
			<transition mode="out-in" name="fade">
				<div v-if="code" v-html="code.markup" />

				<Loader v-else />
			</transition>
		</div>
	</div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
	name: 'Code',

	computed: {
		codesList () {
			return this.$store.getters['codes/list']
		},

		code () {
			return this.getCode(this.codesList)
		}
	},

	methods: {
		getCode (list) {
			if (list) {
				const codes = JSON.parse(JSON.stringify(list))
				return codes[Math.floor(Math.random() * codes.length)]
			}
		}
	},

	components: {
		Loader
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.cv-code
	border-radius .5rem
	overflow hidden
	background var(--color-background-dark)
	@supports (content-visibility auto)
		content-visibility auto

	@media $mq-tablet
		margin 0 -1rem

	& :deep(pre)
		margin 0
		@media $mq-tablet
			padding 1.5em 1em

		&::after
			content none

.cv-code__header
	display flex
	align-items center
	background var(--color-background-light)
	color var(--color-text)
	text-align center
	padding 5px 10px
	border-radius .5rem .5rem 0 0
	position relative
	font-family var(--font-stack-code)

.cv-code__buttons
	margin-right 1rem
	display flex
	gap 6px

	.fake-button
		width .7rem
		height .7rem
		border-radius 50%
		background var(--bg-button)

	.--close
		--bg-button var(--color-red)
	.--minify
		--bg-button var(--color-yellow)
	.--expand
		--bg-button var(--color-green)

.cv-code__title
	margin auto
	transform translateX(-32px)

	@media $mq-desktop
		margin 0
		transform none
</style>
