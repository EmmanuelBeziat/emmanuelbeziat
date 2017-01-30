<template>
	<section class="home">
		<div class="presentation">
			<h1 class="presentation__title">
				<span class="presentation__name">Emmanuel Béziat</span>
				<span class="presentation__age"><span>{{ age }}</span> ({{ nextBirthday }})</span>
			</h1>

			<module-codehome></module-codehome>
		</div>
	</section>
</template>

<script>
import moduleCodehome from '../components/modules/Codehome.vue'
import Moment from 'moment'
import 'moment/locale/fr'

export default {
	name: 'home',
	data () {
		return {
			age: null,
			nextBirthday: null
		}
	},

	components: {
		moduleCodehome
	},

	route: {
		data (transition) {
			console.log('pouet')
			const date = '16.09.1987-02:26'
			const format = 'DD.MM.YYYY-HH:mm'
			const birthday = Moment(date, format)
			const nextbd = Moment(date, format).set({ 'year': Moment().year() })

			Moment.updateLocale('fr', {
				relativeTime: {
					future: 'pour encore %s',
					past: 'depuis %s'
				}
			})

			transition.next({
				age: birthday.fromNow(true),
				nextBirthday: nextbd.fromNow()
			})
		}
	}
}
</script>
