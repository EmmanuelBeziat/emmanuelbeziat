<template>
	<footer class="footer">
		<Copyright />
	</footer>
</template>

<script>
import Copyright from '@/components/copyright/Copyright'

export default {
	name: 'Footer',
	components: {
		Copyright
	}
}
</script>

<style lang="stylus">
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.footer
	text-align center
	padding 1em 0
	display none

	@media $mq-desktop
		display block
</style>
