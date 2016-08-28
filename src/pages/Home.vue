<template>
	<section>
		<div class="presentation">
			<h1 class="presentation__title">
				<span class="presentation__name">Emmanuel Béziat</span>
				<span class="presentation__age"><span>{{ age }}</span> ({{ nextbd }})</span>
			</h1>

			<pre class="language-css">
				<code>
					metiers: {
						developpeur: web, front-end;
						formateur: web;
					}
				</code>
			</pre>

			<pre class="language-markup">
				<code>
					&lt;section class="metiers"&gt;
						&lt;div class="developpeur"&gt;web front-end&lt;/div&gt;
						&lt;div class="formateur"&gt;web&lt;/div&gt;
					&lt;/section&gt;
				</code>
			</pre>

			<pre class="language-javascript">
				<code>
					const metier = function() {
						developpeur: ['web', 'front-end'],
						formateur: 'web'
					};
				</code>
			</pre>
		</div>

		<app-tweets></app-tweets>
		<app-commits></app-commits>
	</section>
</template>

<script>
import appCommits from 'components/app-commits'
import appTweets from 'components/app-tweets'
import Moment from 'moment'
import Prism from 'prismjs'

export default {
	data () {
		return {
			age: '',
			nextbd: ''
		}
	},

	created: function () {
		this.birthdayCalculate()
	},

	methods: {
		birthdayCalculate: function () {
			const date = '16.09.1987-02:26'
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
		appTweets
	},

	ready () {
		setTimeout(function () {
			Prism.highlightAll()
		}, 10)
	}
}

</script>
