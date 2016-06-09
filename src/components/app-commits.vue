<template>
	<div class="commits">
		<h2>Dernières mises à jour du site !</h2>
		<div v-for="record in commits">
			<span class="commits__date"><a :href="record.html_url" target="_blank">{{record.commit.author.date | formatDate}}</a></span> —
			<span class="commits__message">{{record.commit.message | truncate}}</span>
		</div>
	</div>
</template>

<script>
var apiURL = 'https://api.github.com/repos/EmmanuelBeziat/emmanuelbeziat/commits?per_page=3&sha='

export default {
	data () {
		return {
			commits: null,
			currentBranch: 'master'
		}
	},

	created: function () {
		this.fetchData()
	},

	watch: {
		currentBranch: 'fetchData'
	},

	filters: {
		truncate: function (v) {
			var newline = v.indexOf('\n')
			return newline > 0 ? v.slice(0, newline) : v
		},

		formatDate: function (v) {
			return v.replace(/T|Z/g, ' ')
		}
	},

	methods: {
		fetchData: function () {
			var xhr = new XMLHttpRequest()
			var self = this
			xhr.open('GET', apiURL + self.currentBranch)
			xhr.onload = function () {
				self.commits = JSON.parse(xhr.responseText)
			}
			xhr.send()
		}
	}
}
</script>
