<template>
	<section class="not-found">
		<div class="not-found__image" :class="error.image"></div>
		<div class="not-found__404" v-html="error.title"></div>

		<h1 class="not-found__title" v-if="errorNumber.statusCode === 404">Page introuvable</h1>
		<div class="not-found__content">
			<p>Et voilà, vous avez tout cassé… Et qui c’est qui doit réparer tout ça maintenant ?</p>
			<p>Oooh, mais c’est pas grave, hein ? Y’a toujours un « informaticien » pour tout régler, pas vrai ?! <br>Après tout, c’est mon métier, alors ça n’a rien de compliqué… En plus c’est même pas un vrai métier : c’est l’ordinateur qui fait tout.</p>
			<p>Pfff…</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'error',
	props: ['errorNumber'],

	data () {
		const errors = {
			images: ['doctor-who', 'south-park', 'mario', 'obiwan'],
			titles: ['What?!', 'We’re sorry…', 'Sorry, but your page <br>is in another castle', 'This is not the page <br>you’re looking for…']
		}
	},

	computed: {
		error () {
			return errorSet()
		}
	},

	watch: {
		'$route': 'errorSet'
	},

	methods: {
		errorSet: () => {
			const i = Math.floor(Math.random() * this.errors.images.length)

			return {
				image: images[i],
				title: titles[i]
			}
		}
	},
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.not-found
	text-align center

.not-found__404
	font 400 rem(82px)/1 var(--font-stack-heading)
	margin .5em 0 .25em
	color var(--color-green)

.not-found__title
	font 400 var--(font-size-heading-2)/1.5 var(--font-stack-heading)
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
		background-image url('~@/assets/img/404/doctor-who.gif')

	&.south-park
		background-image url('~@/assets/img/404/south-park.gif')

	&.mario
		background-image url('~@/assets/img/404/mario.png')

	&.obiwan
		background-image url('~@/assets/img/404/obiwan.gif')

</style>
