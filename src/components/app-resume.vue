<template>
	<div class="social" v-if="resume">
		<a href="https://twitter/{{ resume.contact.twitter }}" class="social__link" target="_blank">
			<svg v-svg class="icon social__icon" sprite="twitter"></svg><span class="sr-only">Twitter</span>
		</a>
		<a href="https://www.facebook.com/{{ resume.contact.facebook }}" class="social__link" target="_blank">
			<svg v-svg class="icon social__icon" sprite="facebook"></svg><span class="sr-only">Twitter</span>
		</a>
		<a href="https://github.com/{{ resume.contact.github }}" class="social__link" target="_blank">
			<svg v-svg class="icon social__icon" sprite="github"></svg><span class="sr-only">Github</span>
		</a>
		<a href="https://codepen.io/{{ resume.contact.codepen }}" class="social__link" target="_blank">
			<svg v-svg class="icon social__icon" sprite="codepen"></svg><span class="sr-only">Codepen</span>
		</a>
		<a href="https://www.linkedin.com/in/{{ resume.contact.linkedin }}" class="social__link" target="_blank">
			<svg v-svg class="icon social__icon" sprite="linkedin"></svg><span class="sr-only">Linkedin</span>
		</a>
		<a href="https://plus.google.com/+{{ resume.contact.googleplus }}" class="social__link" target="_blank">
			<svg v-svg class="icon social__icon" sprite="google-plus"></svg><span class="sr-only">Google Plus</span>
		</a>
	</div>

	<div class="site-header__bio" v-if="resume">{{ resume.bio.short }}</div>
</template>

<script>
var infos = 'static/resume.json'

export default {
	data () {
		return {
			resume: null
		}
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
