<template>
	<div class="card">
		<h1 class="presentation__title">Emmanuel Béziat</h1>
		<div class="presentation__age"><span>{{ age }} ans</span> ({{ nextBirthday }})</div>
		<div class="presentation__job">Développeur web <span>front-end</span></div>
		<div class="presentation__birthday" v-if="isBirthdayMonth">Si vous voulez m’offrir un petit cadeau, <br>vous pouvez consulter ma <a :href="amazonLink">liste de souhaits Amazon</a> !</div>
	</div>
</template>

<script>
import Moment from 'moment'
moment.locale('fr')

export default {
	data () {
		return {
			age: null,
			nextBirthday: null,
			isBirthdayMonth: false,
			amazonLink: 'http://amzn.eu/clQRFv6'
		}
	},

	created () {
		this.checkAge('16.09.1987-02:26')
	},

	watch: {
		'$route': 'checkAge'
	},

	methods: {
		checkAge (date, format = 'DD.MM.YYYY-HH:mm') {
			const birthday = Moment(date, format)
			const nextBirthday = Moment(date, format).set({ 'year': Moment().year() })
			const rangeMin = Moment(nextBirthday).subtract(1, 'month')
			const rangeMax =  Moment(nextBirthday).add(1, 'month')

			Moment.updateLocale('fr', {
				relativeTime: {
					future: 'pour encore %s',
					past: 'depuis %s'
				}
			})

			if (Moment().isBetween(rangeMin, rangeMax)) {
				this.isBirthdayMonth = true
			}

			this.age = Math.abs(birthday.diff(Moment(), 'years'))
			this.nextBirthday = nextBirthday.fromNow()
		}
	}
}
</script>

<style lang="stylus">
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.card
	margin-bottom rem(80px)
	text-align center

	@media $mq-tablet
		margin-bottom rem(60px)

.presentation__title
	margin 0
	font 400 rem(82px)/1 var(--font-stack-heading)
	color var(--color-blue)

	@media $mq-tablet
		font-size var(--font-size-heading-2)

.presentation__age
	display block
	font 400 var(--font-size-heading-1)/1 var(--font-stack-heading)

	@media $mq-tablet
		font-size var(--font-size-heading-2)

	span
		color var(--color-red)

.presentation__job
	font 400 var(--font-size-heading-1)/1 var(--font-stack-heading)
	color var(--color-green)
	margin-top .25em
	span
		white-space nowrap

	@media $mq-tablet
		font-size var(--font-size-heading-2)

.presentation__birthday
	text-align center
	margin 2em 2rem 0

.presentation__dev
	color var(--color-green)

	span
		color var(--color-yellow)
</style>
