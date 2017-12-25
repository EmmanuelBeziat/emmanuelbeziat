<template>
	<div class="site">
		<module-header/>

		<div class="site-content">
			<module-menu/>
			<main class="site-main">
				<section class="not-found">
					<div class="not-found__image" :class="image"></div>
					<div class="not-found__404" v-html="title"></div>

					<h1 class="not-found__title" v-if="error.statusCode === 404">Page introuvable</h1>
					<div class="not-found__content">
						<p>Et voilà, vous avez tout cassé… Et qui c’est qui doit réparer tout ça maintenant ?</p>
						<p>Oooh, mais c’est pas grave, hein ? Y’a toujours un « informaticien » pour tout régler, pas vrai ?! <br>Après tout, c’est mon métier, alors ça n’a rien de compliqué… En plus c’est même pas un vrai métier : c’est l’ordinateur qui fait tout.</p>
						<p>Pfff…</p>
					</div>
				</section>
			</main>
		</div>

		<module-footer/>
	</div>
</template>

<script>
import ModuleHeader from '~/components/Header.vue'
import ModuleMenu from '~/components/HeaderNav.vue'
import ModuleFooter from '~/components/Footer.vue'

const erreurs = {
	images: ['doctor-who', 'south-park', 'mario', 'obiwan'],
	titles: ['What?!', 'We’re sorry…', 'Page is in another castle', 'This is not the page <br>you’re looking for…']
}

export default {
	name: 'error',
	data () {
		return {
			title: null,
			image: null
		}
	},

	head () {
		return {
			title: 'Une erreur ?! Rhaa !'
		}
	},

	components: {
		ModuleHeader,
		ModuleMenu,
		ModuleFooter
	},

	created () {
		this.errorSet()
	},

	watch: {
		'$route': 'errorSet'
	},

	methods: {
		errorSet: function () {
			const i = Math.floor(Math.random() * erreurs.images.length)

			this.image = erreurs.images[i]
			this.title = erreurs.titles[i]
		}
	},

	props: ['error']
}
</script>
