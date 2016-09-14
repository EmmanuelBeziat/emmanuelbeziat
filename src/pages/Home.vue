<template>
	<section>
		<div class="presentation">
			<h1 class="presentation__title">
				<span class="presentation__name">Emmanuel Béziat</span>
				<span class="presentation__age"><span>{{ age }}</span> ({{ nextbd }})</span>
			</h1>

			<app-homecode></app-homecode>
		</div>

		<app-commits></app-commits>
	</section>
</template>

<script>
import appCommits from 'components/app-commits'
import appHomecode from 'components/app-homecode'
import Moment from 'moment'

export default {
	data () {
		return {
			age: null,
			nextbd: null
		}
	},

	created: function () {
		this.birthdayCalculate()
	},

	methods: {
		/**
		 * Calculate age and birthday
		 */
		birthdayCalculate: function () {
			const date = '17.09.1987-02:26'
			const format = 'DD.MM.YYYY-HH:mm'
			const birthday = Moment(date, format).add(1, 'year')
			const nextbd = Moment(date, format).set({ 'year': Moment().year() })

			Moment.updateLocale('fr', {
				relativeTime: {
					future: 'pour encore %s',
					past: 'depuis %s'
				}
			})

			this.$set('age', birthday.fromNow(true))
			this.$set('nextbd', nextbd.fromNow())
		}
	},

	components: {
		appCommits,
		appHomecode
	}
}

</script>
