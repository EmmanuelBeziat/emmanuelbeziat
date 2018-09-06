<template>
	<section class="home">
		<div class="presentation">
			<Presentation />

			<CodeHome />
		</div>
	</section>
</template>

<script>
import Presentation from '~/components/home/Presentation'
import Codehome from '~/components/home/Code'

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
