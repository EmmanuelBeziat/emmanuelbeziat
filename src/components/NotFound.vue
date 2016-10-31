<template>
	<section class="not-found">
		<div class="not-found__image {{ image }}"></div>
		<div class="not-found__404">{{{ title }}}</div>

		<h1 class="not-found__title">Page introuvable</h1>
		<div class="not-found__content">
			<p>Et voilà, vous avez tout cassé… Et qui c’est qui doit réparer tout ça maintenant ?</p>
			<p>Oooh, mais c’est pas grave, hein ? Y’a toujours un « informaticien » pour tout régler, pas vrai ?! <br>Après tout, c’est mon métier, alors ça n’a rien de compliqué… En plus c’est même pas un vrai métier : c’est l’ordinateur qui fait tout.</p>
			<p>Pfff…</p>
		</div>
	</section>
</template>

<script>
const erreurs = {
	images: ['doctor-who', 'the-office', 'south-park', 'mario', 'obiwan'],
	titles: ['What?!', 'God please no!', 'We’re sorry…', 'Page is in another castle', 'This is not the page <br>you’re looking for…']
}

export default {
	data () {
		return {
			title: null,
			image: null
		}
	},

	created: function () {
		this.errorSet()
	},

	methods: {
		errorSet: function () {
			const i = Math.floor(Math.random() * erreurs.images.length)

			this.$set('image', erreurs.images[i])
			this.$set('title', erreurs.titles[i])
		}
	}
}
</script>
