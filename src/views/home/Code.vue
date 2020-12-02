<template>
	<div class="cv-code">
		<div class="cv-code__header">
			<div class="cv-code__buttons">
				<span class="fake-btn close" />
				<span class="fake-btn minify" />
				<span class="fake-btn expand" />
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

	& :deep(pre)
		margin 0

		&::after
			content none

.cv-code__header
	display flex
	background var(--color-background-light)
	color var(--color-text)
	text-align center
	padding 5px 10px
	border-radius .5rem .5rem 0 0
	position relative
	font-family var(--font-stack-code)

	@media $mq-tablet
		margin 0 -1rem

.cv-code__buttons
	margin-right 1rem

	.fake-btn
		width .7rem
		height .7rem
		border-radius 50%
		margin-right 6px
		display inline-block

	.close
		background var(--color-red)
	.minify
		background var(--color-yellow)
	.expand
		background var(--color-green)

.cv-code__title
	margin auto
	transform translateX(-32px)
	@media $mq-desktop
		margin 0
		transform none
</style>
