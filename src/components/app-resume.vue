<template>
	<div class="social" v-if="resume">
		<a href="https://twitter/{{ resume.contact.twitter }}" class="social__link" target="_blank">Twitter</a>
		<a href="https://www.facebook.com/{{ resume.contact.facebook }}" class="social__link" target="_blank">Facebook</a>
		<a href="https://github.com/{{ resume.contact.github }}" class="social__link" target="_blank">Github</a>
		<a href="https://codepen.io/{{ resume.contact.codepen }}" class="social__link" target="_blank">codepen</a>
		<a href="https://www.linkedin.com/in/{{ resume.contact.linkedin }}" class="social__link" target="_blank">Linkedin</a>
		<a href="https://plus.google.com/+{{ resume.contact.googleplus }}" class="social__link" target="_blank">Google Plus</a>
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
