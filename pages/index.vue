<template>
	<section class="home">
		<div class="presentation">
			<presentation/>

			<codehome/>
		</div>
	</section>
</template>

<script>
import Presentation from '~/components/Presentation'
import Codehome from '~/components/CodeHome'

export default {
	name: 'home',

	components: {
		Presentation,
		Codehome
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: 'Accueil'
		}
	}
}
</script>

<style lang="stylus">
.presentation
	.prism-show-language
		display none
</style>
