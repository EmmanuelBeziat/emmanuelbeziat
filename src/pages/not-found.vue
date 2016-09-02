<template>
	<section class="not-found">
		<div class="not-found__image {{ image }}"></div>
		<div class="not-found__404">{{ title }}</div>
		<h1 class="not-found__title">Page Introuvable</h1>
	</section>
</template>

<script>
const erreurs = {
	images: ['doctor-who', 'the-office', 'south-park', 'mario'],
	titles: ['What?!', 'God please no!', 'We\'re sorry…', 'Page is in another castle']
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
