<template>
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
</template>

<script>
const erreurs = {
	images: ['doctor-who', 'south-park', 'mario', 'obiwan'],
	titles: ['What?!', 'We’re sorry…', 'Sorry, but your page <br>is in another castle', 'This is not the page <br>you’re looking for…']
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

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.not-found
	text-align center

.not-found__404
	font 400 rem(82px)/1 $font-stack-heading
	margin .5em 0 .25em
	color $color-green

.not-found__title
	font 400 $font-size-heading-2/1.5 $font-stack-heading
	margin-top 0

.not-found__content
	max-width rem(280px)
	text-align justify
	margin auto

.not-found__image
	size rem(256px)
	border-radius 50%
	margin 4rem auto 0
	background transparent 50% 50% no-repeat
	background-size cover

	&.doctor-who
		background-image url('~assets/img/404/doctor-who.gif')

	&.south-park
		background-image url('~assets/img/404/south-park.gif')

	&.mario
		background-image url('~assets/img/404/mario.png')

	&.obiwan
		background-image url('~assets/img/404/obiwan.gif')

@require '~assets/styles/modules/tags.styl'
</style>
