<template>
	<footer class="footer">
		<module-copyright/>
	</footer>
</template>

<script>
import moduleCopyright from '~/components/Copyright'

export default {
	name: 'Footer',
	components: {
		moduleCopyright
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.footer
	text-align center
	padding 1em 0

	@media (min-width $breakpoint-tablet + 1)
		display none
</style>
