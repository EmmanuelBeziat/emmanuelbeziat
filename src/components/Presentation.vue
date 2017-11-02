<template>
	<div class="card">
		<h1 class="presentation__title">Emmanuel Béziat</h1>
		<div class="presentation__age"><span>{{ age }}</span> ({{ nextBirthday }})</div>
		<div class="presentation__birthday" v-if="isBirthdayMonth">Si vous voulez m’offrir un petit cadeau, <br>vous pouvez consulter ma <a :href="amazonLink">liste de souhaits Amazon</a> !</div>
	</div>
</template>

<script>
import Moment from 'moment'
import 'moment/locale/fr'

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
			const nextbd = Moment(date, format).set({ 'year': Moment().year() })
			const rangeMin = Moment(nextbd).subtract(1, 'month')
			const rangeMax =  Moment(nextbd).add(1, 'month')

			Moment.updateLocale('fr', {
				relativeTime: {
					future: 'pour encore %s',
					past: 'depuis %s'
				}
			})

			if (Moment().isBetween(rangeMin, rangeMax)) {
				this.isBirthdayMonth = true
			}

			this.age = birthday.fromNow(true)
			this.nextBirthday = nextbd.fromNow()
		}
	}
}
</script>

