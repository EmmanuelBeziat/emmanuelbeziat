<template>
	<div class="site">
		<app-header></app-header>
		<div class="site-content">
			<app-nav></app-nav>
			<app-main></app-main>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from './components/app-header'
import appNav from './components/app-nav'
import appMain from './components/app-main'
import appFooter from './components/app-footer'

var infos = 'static/resume.json'
export default {
	data () {
		return {
			resume: null
		}
	},

	components: {
		appHeader,
		appNav,
		appMain,
		appFooter
	},

	created: function() {
		this.fetchData()
	},

	methods: {
		fetchData: function() {
			var xhr = new XMLHttpRequest()
			var self = this
			xhr.open('GET', infos)
			xhr.onload = function () {
				self.resume = JSON.parse(xhr.responseText)
			}
			xhr.send()
		}
	}
}
</script>

<style lang="stylus">
	@require './assets/stylus/main.styl'
</style>
