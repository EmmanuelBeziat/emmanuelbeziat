<template>
	<footer class="footer" v-once>
		<Copyright />
	</footer>
</template>

<script>
import Copyright from '@/components/Copyright'

export default {
	name: 'Footer',

	components: {
		Copyright
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.footer
	text-align center
	padding 1em 0
	display none

	@supports (content-visibility auto)
		content-visibility auto

	@media $mq-desktop
		display block
</style>
