<template>
	<section class="home">
		<div v-if="!age">
			<module-loader></module-loader>
		</div>

		<div class="presentation" v-else>
			<h1 class="presentation__title">
				<span class="presentation__name">Emmanuel Béziat</span>
				<span class="presentation__age"><span>{{ age }}</span> ({{ nextBirthday }})</span>
			</h1>

			<module-codehome></module-codehome>
		</div>
	</section>
</template>

<script>
import moduleLoader from '../components/modules/Loader.vue'
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
		moduleLoader,
		moduleCodehome
	},

	created () {
		this.checkAge()
	},

	watch: {
		'$route': 'checkAge'
	},

	methods: {
		checkAge () {
			const date = '16.09.1988-02:26'
			const format = 'DD.MM.YYYY-HH:mm'
			const birthday = Moment(date, format)
			const nextbd = Moment(date, format).set({ 'year': Moment().year() })

			Moment.updateLocale('fr', {
				relativeTime: {
					future: 'pour encore %s',
					past: 'depuis %s'
				}
			})

			this.age = birthday.fromNow(true),
			this.nextBirthday = nextbd.fromNow()
		}
	}
}
</script>
