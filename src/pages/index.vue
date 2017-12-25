<template>
	<section class="home">
		<div class="presentation">
			<module-presentation/>

			<module-codehome/>
		</div>
	</section>
</template>

<script>
import ModulePresentation from '~/components/Presentation'
import ModuleCodehome from '~/components/Codehome'

export default {
	name: 'home',

	components: {
		ModulePresentation,
		ModuleCodehome
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
